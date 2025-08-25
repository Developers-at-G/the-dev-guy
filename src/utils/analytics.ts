import { track } from '@vercel/analytics';


export const analyticsEvents = {
  CV_DOWNLOADED: 'CV Downloaded',
  RESUME_DOWNLOAD_CONVERSION: 'Resume Download Conversion',
  
  PROJECT_VIEWED: 'Project Viewed',
  CASE_STUDY_VIEWED: 'Case Study Viewed',
  CONTACT_FORM_SUBMITTED: 'Contact Form Submitted',
  BLOG_POST_VIEWED: 'Blog Post Viewed',
  EXTERNAL_LINK_CLICKED: 'External Link Clicked',
} as const;

export function trackCVDownload(source: string, additionalData?: Record<string, string | number | boolean>) {
  track(analyticsEvents.CV_DOWNLOADED, {
    source,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
    referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'server',
    ...additionalData,
  });

  track(analyticsEvents.RESUME_DOWNLOAD_CONVERSION, {
    source,
    value: 1,
  });
}

export function trackProjectView(projectName: string, source: string) {
  track(analyticsEvents.PROJECT_VIEWED, {
    project: projectName,
    source,
    timestamp: new Date().toISOString(),
  });
}

export function trackCaseStudyView(caseStudyName: string) {
  track(analyticsEvents.CASE_STUDY_VIEWED, {
    caseStudy: caseStudyName,
    timestamp: new Date().toISOString(),
  });
}

export function trackExternalLink(url: string, linkText: string, source: string) {
  track(analyticsEvents.EXTERNAL_LINK_CLICKED, {
    url,
    linkText,
    source,
    timestamp: new Date().toISOString(),
  });
}

export function trackCustomEvent(eventName: string, properties: Record<string, string | number | boolean>) {
  track(eventName, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
}
