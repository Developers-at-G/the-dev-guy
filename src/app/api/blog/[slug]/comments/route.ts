import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch comments for a blog post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

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
    const { authorName, authorEmail, content, parentId } = await request.json();

    if (!authorName || !content) {
      return NextResponse.json(
        { error: 'Name and content are required' },
        { status: 400 }
      );
    }

    // Basic spam prevention - check for duplicate content
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const duplicate = await prisma.blogComment.findFirst({
      where: {
        postSlug: slug,
        content,
        createdAt: {
          gte: oneMinuteAgo,
        },
      },
    });

    if (duplicate) {
      return NextResponse.json(
        { error: 'Duplicate comment detected' },
        { status: 400 }
      );
    }

    // Insert comment (approved = true for now, you can change to false for moderation)
    const comment = await prisma.blogComment.create({
      data: {
        postSlug: slug,
        authorName,
        authorEmail: authorEmail || null,
        content,
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
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}

