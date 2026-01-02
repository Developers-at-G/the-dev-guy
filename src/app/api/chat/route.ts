import { NextRequest, NextResponse } from 'next/server';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { rateLimit, getClientIdentifier } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 20 requests per 5 minutes per IP (chat is expensive)
    const clientId = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`chat:${clientId}`, {
      windowMs: 5 * 60 * 1000, // 5 minutes
      maxRequests: 20,
    });

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '20',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    const { messages } = await request.json();

    // Validate messages
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Limit message length and count
    if (messages.length > 10) {
      return NextResponse.json(
        { error: 'Too many messages in conversation' },
        { status: 400 }
      );
    }

    // Validate each message
    for (const msg of messages) {
      if (!msg.role || !msg.content) {
        return NextResponse.json(
          { error: 'Invalid message format' },
          { status: 400 }
        );
      }
      if (typeof msg.content !== 'string' || msg.content.length > 1000) {
        return NextResponse.json(
          { error: 'Message content too long (max 1000 characters)' },
          { status: 400 }
        );
      }
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Create context about Abdallah and his portfolio
    const portfolioContext = `
You are a helpful AI assistant for Abdallah Amadou Gueye's portfolio website. You help visitors learn about Abdallah and his projects.

ABOUT ABDALLAH:
- Name: ${profileData.name}
- Title: ${profileData.title}
- Subtitle: ${profileData.subtitle}
- Description: ${profileData.description}
- Bio: ${profileData.about.bio}
- Experience: ${profileData.about.experience}
- Key Skills: ${profileData.skills.join(', ')}

EDUCATION:
${educationData.map(edu => `
- ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.period})
  Location: ${edu.location}
  ${edu.description || ''}
`).join('\n')}

PROJECTS:
${projectsData.map(project => `
- ${project.title} (${project.period})
  Technologies: ${project.technologies.join(', ')}
  Role: ${project.role}
  Team: ${project.team}
  Problem: ${project.problem}
  ${project.impacts ? `Impacts: ${project.impacts.join(', ')}` : ''}
  ${project.link ? `Live: ${project.link}` : ''}
  ${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}
`).join('\n')}

SKILLS:
${skillsData.map(category => `
${category.title}: ${category.skills.map(s => `${s.name} (${s.experience})`).join(', ')}
`).join('\n')}

INSTRUCTIONS:
- Be friendly, professional, and conversational
- Answer questions about Abdallah's background, skills, education, and projects
- When asked about projects, provide relevant details like technologies used, problems solved, and impacts
- Keep responses concise but informative
- If asked about something not in the context, politely say you don't have that information
- Use a warm, approachable tone that reflects Abdallah's passion for development 
`;

    const systemMessage = {
      role: 'system',
      content: portfolioContext,
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content }, {
      headers: {
        'X-RateLimit-Limit': '20',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

