import { track } from '@vercel/analytics';


export const analyticsEvents = {
  CV_DOWNLOADED: 'CV Downloaded',
  RESUME_DOWNLOAD_CONVERSION: 'Resume Download Conversion',
  
  PROJECT_VIEWED: 'Project Viewed',
  PROJECT_CARD_CLICKED: 'Project Card Clicked',
  PROJECT_LINK_CLICKED: 'Project Link Clicked',
  CASE_STUDY_VIEWED: 'Case Study Viewed',
  CONTACT_FORM_SUBMITTED: 'Contact Form Submitted',
  BLOG_POST_VIEWED: 'Blog Post Viewed',
  EXTERNAL_LINK_CLICKED: 'External Link Clicked',
  
  CHATBOT_OPENED: 'Chatbot Opened',
  CHATBOT_MESSAGE_SENT: 'Chatbot Message Sent',
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

export function trackProjectCardClick(projectName: string, source: string) {
  track(analyticsEvents.PROJECT_CARD_CLICKED, {
    project: projectName,
    source,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

export function trackProjectLinkClick(projectName: string, linkType: 'live' | 'github' | 'case-study', url: string) {
  track(analyticsEvents.PROJECT_LINK_CLICKED, {
    project: projectName,
    linkType,
    url,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

export function trackChatbotOpened() {
  track(analyticsEvents.CHATBOT_OPENED, {
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

export function trackChatbotMessageSent(messageLength: number) {
  track(analyticsEvents.CHATBOT_MESSAGE_SENT, {
    messageLength,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}
