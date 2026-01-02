import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { rateLimit, getClientIdentifier } from '@/lib/rateLimit';
import { validateAuthorName, validateEmail, validateCommentContent, validateSlug } from '@/lib/validation';

// GET: Fetch comments for a blog post
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

    const comments = await prisma.blogComment.findMany({
      where: {
        postSlug: slug,
        approved: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        authorName: true,
        authorEmail: true,
        content: true,
        createdAt: true,
        parentId: true,
      },
    });

    // Transform to match expected format
    const formattedComments = comments.map((comment) => ({
      id: comment.id,
      author_name: comment.authorName,
      author_email: comment.authorEmail,
      content: comment.content,
      created_at: comment.createdAt.toISOString(),
      parent_id: comment.parentId,
    }));

    return NextResponse.json({ comments: formattedComments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST: Add a new comment
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Rate limiting: 5 comments per 15 minutes per IP
    const clientId = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`comment:${clientId}`, {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 5,
    });

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many comments. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
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

    const { authorName, authorEmail, content, parentId } = await request.json();

    // Validate and sanitize inputs
    const nameValidation = validateAuthorName(authorName);
    if (!nameValidation.valid) {
      return NextResponse.json(
        { error: nameValidation.error },
        { status: 400 }
      );
    }

    const emailValidation = validateEmail(authorEmail);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.error },
        { status: 400 }
      );
    }

    const contentValidation = validateCommentContent(content);
    if (!contentValidation.valid) {
      return NextResponse.json(
        { error: contentValidation.error },
        { status: 400 }
      );
    }

    // Validate parentId if provided
    if (parentId !== null && parentId !== undefined) {
      if (typeof parentId !== 'number' || parentId <= 0) {
        return NextResponse.json(
          { error: 'Invalid parent comment ID' },
          { status: 400 }
        );
      }
    }

    // Basic spam prevention - check for duplicate content
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const duplicate = await prisma.blogComment.findFirst({
      where: {
        postSlug: slug,
        content: contentValidation.sanitized!,
        createdAt: {
          gte: oneMinuteAgo,
        },
      },
    });

    if (duplicate) {
      return NextResponse.json(
        { error: 'Duplicate comment detected. Please wait before posting again.' },
        { status: 400 }
      );
    }

    // Insert comment (approved = true for now, you can change to false for moderation)
    const comment = await prisma.blogComment.create({
      data: {
        postSlug: slugValidation.sanitized!,
        authorName: nameValidation.sanitized!,
        authorEmail: emailValidation.sanitized || null,
        content: contentValidation.sanitized!,
        parentId: parentId || null,
        approved: true, // Set to false if you want moderation
      },
      select: {
        id: true,
        authorName: true,
        content: true,
        createdAt: true,
        parentId: true,
      },
    });

    // Format to match expected response
    const formattedComment = {
      id: comment.id,
      author_name: comment.authorName,
      content: comment.content,
      created_at: comment.createdAt.toISOString(),
      parent_id: comment.parentId,
    };

    return NextResponse.json({
      success: true,
      comment: formattedComment,
    }, {
      headers: {
        'X-RateLimit-Limit': '5',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
      },
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}

