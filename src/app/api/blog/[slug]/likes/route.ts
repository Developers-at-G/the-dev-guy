import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { rateLimit, getClientIdentifier } from '@/lib/rateLimit';
import { validateSlug } from '@/lib/validation';

// GET: Fetch likes/dislikes for a blog post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Validate slug
    const slugValidation = validateSlug(slug);
    if (!slugValidation.valid) {
      return NextResponse.json(
        { error: slugValidation.error },
        { status: 400 }
      );
    }

    const [likes, dislikes] = await Promise.all([
      prisma.blogReaction.count({
        where: { postSlug: slugValidation.sanitized!, reaction: 'like' },
      }),
      prisma.blogReaction.count({
        where: { postSlug: slugValidation.sanitized!, reaction: 'dislike' },
      }),
    ]);

    return NextResponse.json({
      likes,
      dislikes,
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reactions' },
      { status: 500 }
    );
  }
}

// POST: Add like/dislike
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Rate limiting: 10 reactions per minute per IP
    const clientId = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`reaction:${clientId}`, {
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 10,
    });

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many reactions. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Validate slug
    const slugValidation = validateSlug(slug);
    if (!slugValidation.valid) {
      return NextResponse.json(
        { error: slugValidation.error },
        { status: 400 }
      );
    }

    const { reaction, userIdentifier } = await request.json();

    if (!reaction || typeof reaction !== 'string' || !['like', 'dislike'].includes(reaction)) {
      return NextResponse.json(
        { error: 'Invalid reaction type' },
        { status: 400 }
      );
    }

    // Validate userIdentifier if provided
    let finalIdentifier: string;
    if (userIdentifier && typeof userIdentifier === 'string' && userIdentifier.length > 0) {
      // Sanitize and limit length
      finalIdentifier = userIdentifier.slice(0, 255);
    } else {
      // Use IP address or client ID as fallback
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                 request.headers.get('x-real-ip') || 
                 clientId;
      finalIdentifier = ip;
    }

    // Upsert reaction (update if exists, create if not)
    await prisma.blogReaction.upsert({
      where: {
        postSlug_userIdentifier: {
          postSlug: slugValidation.sanitized!,
          userIdentifier: finalIdentifier,
        },
      },
      update: {
        reaction,
      },
      create: {
        postSlug: slugValidation.sanitized!,
        userIdentifier: finalIdentifier,
        reaction,
      },
    });

    // Return updated counts
    const [likes, dislikes] = await Promise.all([
      prisma.blogReaction.count({
        where: { postSlug: slugValidation.sanitized!, reaction: 'like' },
      }),
      prisma.blogReaction.count({
        where: { postSlug: slugValidation.sanitized!, reaction: 'dislike' },
      }),
    ]);

    return NextResponse.json({
      success: true,
      likes,
      dislikes,
    }, {
      headers: {
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
      },
    });
  } catch (error) {
    console.error('Error adding reaction:', error);
    return NextResponse.json(
      { error: 'Failed to add reaction' },
      { status: 500 }
    );
  }
}

