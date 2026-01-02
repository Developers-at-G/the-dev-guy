'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../ui/Button';
import { trackBlogPostLiked, trackBlogPostDisliked, trackBlogCommentAdded } from '../../utils/analytics';

interface BlogInteractionsProps {
  postSlug: string;
}

interface ReactionCounts {
  likes: number;
  dislikes: number;
}

interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
  parent_id?: number;
}

export const BlogInteractions: React.FC<BlogInteractionsProps> = ({ postSlug }) => {
  const [reactions, setReactions] = useState<ReactionCounts>({ likes: 0, dislikes: 0 });
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Comment form state
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');

  // Generate a user identifier (in production, use a more robust method)
  const getUserIdentifier = () => {
    if (typeof window !== 'undefined') {
      let identifier = localStorage.getItem(`user_${postSlug}`);
      if (!identifier) {
        identifier = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(`user_${postSlug}`, identifier);
      }
      return identifier;
    }
    return 'anonymous';
  };

  // Fetch reactions
  const fetchReactions = useCallback(async () => {
    try {
      const response = await fetch(`/api/blog/${postSlug}/likes`);
      const data = await response.json();
      setReactions(data);
    } catch (error) {
      console.error('Error fetching reactions:', error);
    }
  }, [postSlug]);

  // Fetch comments
  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/blog/${postSlug}/comments`);
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  }, [postSlug]);

  useEffect(() => {
    fetchReactions();
    fetchComments();
  }, [postSlug, fetchReactions, fetchComments]);

  // Handle reaction
  const handleReaction = async (reaction: 'like' | 'dislike') => {
    const identifier = getUserIdentifier();
    
    try {
      const response = await fetch(`/api/blog/${postSlug}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reaction,
          userIdentifier: identifier,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setReactions({ likes: data.likes, dislikes: data.dislikes });
        setUserReaction(reaction);
        // Track analytics
        if (reaction === 'like') {
          trackBlogPostLiked(postSlug);
        } else {
          trackBlogPostDisliked(postSlug);
        }
      } else if (response.status === 429) {
        alert(`Rate limit exceeded: ${data.error}. Please try again in ${data.retryAfter || 60} seconds.`);
      } else if (data.error) {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error submitting reaction:', error);
    }
  };

  // Handle comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`/api/blog/${postSlug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName,
          authorEmail,
          content: commentContent,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setComments([data.comment, ...comments]);
        setAuthorName('');
        setAuthorEmail('');
        setCommentContent('');
        setShowCommentForm(false);
        // Track analytics
        trackBlogCommentAdded(postSlug, commentContent.length);
      } else if (response.status === 429) {
        alert(`Rate limit exceeded: ${data.error}. Please try again in ${data.retryAfter || 60} seconds.`);
      } else if (data.error) {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-12 flex items-center justify-center py-12">
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading interactions...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-16">
      {/* Reactions */}
      <div className="bg-gradient-to-br from-white/5 via-background/80 to-accent/5 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Was this helpful?</h3>
            <p className="text-sm text-muted-foreground">Your feedback helps improve the content</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleReaction('like')}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                userReaction === 'like'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'bg-background/50 border border-input hover:bg-accent hover:border-primary/30 text-foreground'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${userReaction === 'like' ? 'scale-110' : 'group-hover:scale-110'}`} 
                fill={userReaction === 'like' ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="font-semibold">{reactions.likes}</span>
            </button>
            <button
              onClick={() => handleReaction('dislike')}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                userReaction === 'dislike'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'bg-background/50 border border-input hover:bg-accent hover:border-primary/30 text-foreground'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${userReaction === 'dislike' ? 'scale-110' : 'group-hover:scale-110'}`} 
                fill={userReaction === 'dislike' ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
              <span className="font-semibold">{reactions.dislikes}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-gradient-to-br from-white/5 via-background/80 to-accent/5 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Comments
            </h3>
            <p className="text-sm text-muted-foreground">
              {comments.length === 0 
                ? 'No comments yet' 
                : `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`
              }
            </p>
          </div>
          <Button
            variant={showCommentForm ? 'outline' : 'primary'}
            size="md"
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="flex items-center gap-2"
          >
            {showCommentForm ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Comment
              </>
            )}
          </Button>
        </div>

          {/* Comment Form */}
          {showCommentForm && (
            <form onSubmit={handleCommentSubmit} className="mb-8 p-6 bg-background/40 rounded-xl border border-primary/10 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                <input
                  type="text"
                  className="flex h-11 w-full rounded-lg border border-input bg-background/80 backdrop-blur-sm px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all"
                  placeholder="Your name"
                  value={authorName}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 100) {
                      setAuthorName(value);
                    }
                  }}
                  maxLength={100}
                  required
                />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                <input
                  type="email"
                  className="flex h-11 w-full rounded-lg border border-input bg-background/80 backdrop-blur-sm px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all"
                  placeholder="your@email.com"
                  value={authorEmail}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 255) {
                      setAuthorEmail(value);
                    }
                  }}
                  maxLength={255}
                />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Comment <span className="text-primary">*</span>
                </label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-lg border border-input bg-background/80 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all resize-none"
                  placeholder="Share your thoughts..."
                  value={commentContent}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 2000) {
                      setCommentContent(value);
                    }
                  }}
                  maxLength={2000}
                  required
                />
                <div className="text-xs text-muted-foreground text-right mt-1">
                  {commentContent.length} / 2000 characters
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={submitting}
                  className="min-w-[140px]"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Posting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Post Comment
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Comments List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <svg className="w-8 h-8 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-lg font-medium mb-1">
                  No comments yet
                </p>
                <p className="text-muted-foreground/70 text-sm">
                  Be the first to share your thoughts!
                </p>
              </div>
            ) : (
              comments.map((comment, index) => {
                const initials = comment.author_name
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2);
                
                return (
                  <div
                    key={comment.id}
                    className="group bg-background/40 backdrop-blur-sm rounded-xl border border-primary/10 p-5 hover:border-primary/20 hover:bg-background/60 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                          {initials}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="font-semibold text-foreground">
                            {comment.author_name}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(comment.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
      </div>
    </div>
  );
};

