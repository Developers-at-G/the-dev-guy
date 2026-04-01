import { track } from '@vercel/analytics';


export const analyticsEvents = {
  PROJECT_VIEWED: 'Project Viewed',
  PROJECT_CARD_CLICKED: 'Project Card Clicked',
  PROJECT_LINK_CLICKED: 'Project Link Clicked',
  CONTACT_FORM_SUBMITTED: 'Contact Form Submitted',
  BLOG_POST_VIEWED: 'Blog Post Viewed',
  EXTERNAL_LINK_CLICKED: 'External Link Clicked',
  
  BLOG_POST_LIKED: 'Blog Post Liked',
  BLOG_POST_DISLIKED: 'Blog Post Disliked',
  BLOG_COMMENT_ADDED: 'Blog Comment Added',
  
  CHATBOT_OPENED: 'Chatbot Opened',
  CHATBOT_MESSAGE_SENT: 'Chatbot Message Sent',
  CHATBOT_NAVIGATION_CLICKED: 'Chatbot Navigation Clicked',
  CHATBOT_TOPIC_INTEREST: 'Chatbot Topic Interest',
} as const;

export function trackProjectView(projectName: string, source: string) {
  track(analyticsEvents.PROJECT_VIEWED, {
    project: projectName,
    source,
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

export function trackProjectLinkClick(projectName: string, linkType: 'live' | 'github', url: string) {
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

export function trackChatbotMessageSent(messageContent: string, messageLength: number, messageIndex: number) {
  // Detect topic from message content
  const detectedTopic = detectTopicFromMessage(messageContent);
  
  track(analyticsEvents.CHATBOT_MESSAGE_SENT, {
    messageContent: messageContent.substring(0, 200), // Limit length for privacy
    messageLength,
    messageIndex,
    topic: detectedTopic,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });

  // Track topic interest separately for analytics
  if (detectedTopic && detectedTopic !== 'other') {
    track(analyticsEvents.CHATBOT_TOPIC_INTEREST, {
      topic: detectedTopic,
      messagePreview: messageContent.substring(0, 100),
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackChatbotNavigation(path: string, source: string) {
  track(analyticsEvents.CHATBOT_NAVIGATION_CLICKED, {
    path,
    source, // 'chatbot'
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

// Helper function to detect topics from user messages
function detectTopicFromMessage(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Topic keywords mapping
  const topicKeywords: Record<string, string[]> = {
    projects: ['project', 'built', 'app', 'website', 'application', 'work', 'portfolio', 'github', 'deploy', 'live'],
    skills: ['skill', 'technology', 'tech', 'know', 'learn', 'framework', 'library', 'language', 'stack', 'expert'],
    experience: ['experience', 'worked', 'job', 'career', 'position', 'company', 'professional', 'work history', 'background'],
    education: ['education', 'degree', 'university', 'school', 'learned', 'studied', 'college', 'course'],
    contact: ['contact', 'email', 'reach', 'hire', 'available', 'work together', 'collaborate', 'connect'],
    blog: ['blog', 'article', 'write', 'post', 'tutorial', 'learn'],
    architecture: ['architecture', 'how you build', 'structure', 'approach', 'methodology'],
  };

  // Count matches for each topic
  const topicScores: Record<string, number> = {};
  
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    topicScores[topic] = keywords.reduce((score, keyword) => {
      return score + (lowerMessage.includes(keyword) ? 1 : 0);
    }, 0);
  }

  // Find topic with highest score
  const topTopic = Object.entries(topicScores).reduce((max, [topic, score]) => {
    return score > max[1] ? [topic, score] : max;
  }, ['other', 0] as [string, number]);

  return topTopic[1] > 0 ? topTopic[0] : 'other';
}

export function trackBlogPostLiked(postSlug: string) {
  track(analyticsEvents.BLOG_POST_LIKED, {
    postSlug,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

export function trackBlogPostDisliked(postSlug: string) {
  track(analyticsEvents.BLOG_POST_DISLIKED, {
    postSlug,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}

export function trackBlogCommentAdded(postSlug: string, commentLength: number) {
  track(analyticsEvents.BLOG_COMMENT_ADDED, {
    postSlug,
    commentLength,
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : 'server',
  });
}
