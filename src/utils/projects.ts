/**
 * Generates a URL-safe slug from a project title.
 * Used consistently across project links and routes.
 */
export function getProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}
