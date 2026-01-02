import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch likes/dislikes for a blog post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const [likes, dislikes] = await Promise.all([
      prisma.blogReaction.count({
        where: { postSlug: slug, reaction: 'like' },
      }),
      prisma.blogReaction.count({
        where: { postSlug: slug, reaction: 'dislike' },
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
    const { reaction, userIdentifier } = await request.json();

    if (!reaction || !['like', 'dislike'].includes(reaction)) {
      return NextResponse.json(
        { error: 'Invalid reaction type' },
        { status: 400 }
      );
    }

    // Use IP address or a stored identifier to prevent duplicate reactions
    // In production, you might want to use a more robust method
    const identifier = userIdentifier || request.headers.get('x-forwarded-for') || 'anonymous';

    // Upsert reaction (update if exists, create if not)
    await prisma.blogReaction.upsert({
      where: {
        postSlug_userIdentifier: {
          postSlug: slug,
          userIdentifier: identifier,
        },
      },
      update: {
        reaction,
      },
      create: {
        postSlug: slug,
        userIdentifier: identifier,
        reaction,
      },
    });

    // Return updated counts
    const [likes, dislikes] = await Promise.all([
      prisma.blogReaction.count({
        where: { postSlug: slug, reaction: 'like' },
      }),
      prisma.blogReaction.count({
        where: { postSlug: slug, reaction: 'dislike' },
      }),
    ]);

    return NextResponse.json({
      success: true,
      likes,
      dislikes,
    });
  } catch (error) {
    console.error('Error adding reaction:', error);
    return NextResponse.json(
      { error: 'Failed to add reaction' },
      { status: 500 }
    );
  }
}

