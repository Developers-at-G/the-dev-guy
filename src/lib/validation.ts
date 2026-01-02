// Input validation and sanitization utilities

export interface ValidationResult {
  valid: boolean;
  error?: string;
  sanitized?: string;
}

// Length limits
export const LIMITS = {
  AUTHOR_NAME: { min: 1, max: 100 },
  AUTHOR_EMAIL: { max: 255 },
  COMMENT_CONTENT: { min: 1, max: 2000 },
  SLUG: { max: 255 },
} as const;

// Sanitize HTML to prevent XSS
export function sanitizeHtml(input: string): string {
  // Remove HTML tags but preserve line breaks
  let sanitized = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/<[^>]+>/g, '') // Remove all HTML tags
    .trim();

  // Convert line breaks to spaces (React will handle formatting)
  sanitized = sanitized.replace(/\n+/g, ' ').replace(/\s+/g, ' ');

  return sanitized;
}

// Validate and sanitize author name
export function validateAuthorName(name: string): ValidationResult {
  if (!name || typeof name !== 'string') {
    return { valid: false, error: 'Name is required' };
  }

  const trimmed = name.trim();
  
  if (trimmed.length < LIMITS.AUTHOR_NAME.min) {
    return { valid: false, error: `Name must be at least ${LIMITS.AUTHOR_NAME.min} character` };
  }

  if (trimmed.length > LIMITS.AUTHOR_NAME.max) {
    return { valid: false, error: `Name must be no more than ${LIMITS.AUTHOR_NAME.max} characters` };
  }

  // Check for suspicious patterns
  if (/<script|javascript:|on\w+\s*=/i.test(trimmed)) {
    return { valid: false, error: 'Invalid characters in name' };
  }

  return {
    valid: true,
    sanitized: sanitizeHtml(trimmed),
  };
}

// Validate and sanitize email
export function validateEmail(email: string | null | undefined): ValidationResult {
  if (!email) {
    return { valid: true, sanitized: null }; // Email is optional
  }

  if (typeof email !== 'string') {
    return { valid: false, error: 'Email must be a string' };
  }

  const trimmed = email.trim().toLowerCase();

  if (trimmed.length > LIMITS.AUTHOR_EMAIL.max) {
    return { valid: false, error: `Email must be no more than ${LIMITS.AUTHOR_EMAIL.max} characters` };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return {
    valid: true,
    sanitized: trimmed,
  };
}

// Validate and sanitize comment content
export function validateCommentContent(content: string): ValidationResult {
  if (!content || typeof content !== 'string') {
    return { valid: false, error: 'Comment content is required' };
  }

  const trimmed = content.trim();

  if (trimmed.length < LIMITS.COMMENT_CONTENT.min) {
    return { valid: false, error: `Comment must be at least ${LIMITS.COMMENT_CONTENT.min} character` };
  }

  if (trimmed.length > LIMITS.COMMENT_CONTENT.max) {
    return { valid: false, error: `Comment must be no more than ${LIMITS.COMMENT_CONTENT.max} characters` };
  }

  // Sanitize HTML
  const sanitized = sanitizeHtml(trimmed);

  if (sanitized.length < LIMITS.COMMENT_CONTENT.min) {
    return { valid: false, error: 'Comment content is invalid after sanitization' };
  }

  return {
    valid: true,
    sanitized,
  };
}

// Validate slug
export function validateSlug(slug: string): ValidationResult {
  if (!slug || typeof slug !== 'string') {
    return { valid: false, error: 'Slug is required' };
  }

  if (slug.length > LIMITS.SLUG.max) {
    return { valid: false, error: `Slug must be no more than ${LIMITS.SLUG.max} characters` };
  }

  // Slug should only contain alphanumeric, hyphens, and underscores
  if (!/^[a-z0-9-_]+$/i.test(slug)) {
    return { valid: false, error: 'Invalid slug format' };
  }

  return {
    valid: true,
    sanitized: slug,
  };
}

