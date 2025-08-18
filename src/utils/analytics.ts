import { track } from '@vercel/analytics';

/**
 * Analytics utility functions for tracking user interactions
 * All tracking events will appear in your Vercel Analytics dashboard
 */

export const analyticsEvents = {
  // CV Download Events
  CV_DOWNLOADED: 'CV Downloaded',
  RESUME_DOWNLOAD_CONVERSION: 'Resume Download Conversion',
  
  // Other potential events you might want to track
  PROJECT_VIEWED: 'Project Viewed',
  CASE_STUDY_VIEWED: 'Case Study Viewed',
  CONTACT_FORM_SUBMITTED: 'Contact Form Submitted',
  BLOG_POST_VIEWED: 'Blog Post Viewed',
  EXTERNAL_LINK_CLICKED: 'External Link Clicked',
} as const;

/**
 * Track CV download with enhanced metadata
 */
export function trackCVDownload(source: string, additionalData?: Record<string, string | number | boolean>) {
  track(analyticsEvents.CV_DOWNLOADED, {
    source,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
    referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'server',
    ...additionalData,
  });

  // Also track as conversion
  track(analyticsEvents.RESUME_DOWNLOAD_CONVERSION, {
    source,
    value: 1,
  });
}

/**
 * Track project interactions
 */
export function trackProjectView(projectName: string, source: string) {
  track(analyticsEvents.PROJECT_VIEWED, {
    project: projectName,
    source,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track case study views
 */
export function trackCaseStudyView(caseStudyName: string) {
  track(analyticsEvents.CASE_STUDY_VIEWED, {
    caseStudy: caseStudyName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, linkText: string, source: string) {
  track(analyticsEvents.EXTERNAL_LINK_CLICKED, {
    url,
    linkText,
    source,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Generic event tracker for custom events
 */
export function trackCustomEvent(eventName: string, properties: Record<string, string | number | boolean>) {
  track(eventName, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
}
