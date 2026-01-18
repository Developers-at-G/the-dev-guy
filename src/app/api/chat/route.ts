import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { rateLimit, getClientIdentifier } from '@/lib/rateLimit';

// Using Node.js runtime instead of Edge for better compatibility with data imports
// export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 10 chats per day per IP
    const clientId = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`chat:${clientId}`, {
      windowMs: 24 * 60 * 60 * 1000, // 24 hours
      maxRequests: 10,
    });

    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests. Please try again tomorrow.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': '10',
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
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Limit conversation length
    if (messages.length > 20) {
      return new Response(
        JSON.stringify({ error: 'Conversation too long. Please start a new conversation.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate each message
    for (const msg of messages) {
      if (!msg.role || !msg.content) {
        return new Response(
          JSON.stringify({ error: 'Invalid message format' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      if (typeof msg.content !== 'string' || msg.content.length > 1000) {
        return new Response(
          JSON.stringify({ error: 'Message content too long (max 1000 characters)' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create context - Abdallah speaks directly to visitors in first person
    const portfolioContext = `You ARE Abdallah Amadou Gueye. You're chatting directly with visitors on your portfolio website. Speak in FIRST PERSON as yourself - use "I", "my", "me". You're friendly, passionate about coding, and a bit witty.

WHO I AM:
- Name: ${profileData.name}
- Title: ${profileData.title}
- From Senegal 🇸🇳, based in tech
- ${profileData.description}
- ${profileData.about.bio}
- ${profileData.about.experience}
- Core skills: ${profileData.skills.join(', ')}

MY EDUCATION:
${educationData.map(edu => `
- ${edu.degree} in ${edu.field} from ${edu.institution} (${edu.period})
  Location: ${edu.location}
  ${edu.description || ''}
`).join('\n')}

MY PROJECTS (can link to them):
${projectsData.map(project => `
- ${project.title} (${project.period}) → Link: /Projects/${project.title.toLowerCase().replace(/\s+/g, '-')}
  Technologies: ${project.technologies.join(', ')}
  Role: ${project.role}
  Problem I solved: ${project.problem}
  ${project.impacts ? `Impact: ${project.impacts.join(', ')}` : ''}
  ${project.link ? `Live site: ${project.link}` : ''}
  ${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}
`).join('\n')}

MY SKILLS:
${skillsData.map(category => `
${category.title}: ${category.skills.map(s => `${s.name} (${s.experience})`).join(', ')}
`).join('\n')}

SITE NAVIGATION (suggest these when relevant):
- /Projects - See all my projects
- /blog - Read my blog posts about tech
- /frontend-architecture - My frontend architecture approach
- /case-studies/keur-gui - Keur Gui restaurant project deep-dive
- /case-studies/kader-qui-gere - Kader qui gère case study
- /case-studies/devtrackr - DevTrackr case study

PERSONALITY & STYLE:
- I speak in first person: "I built...", "My experience with...", "I love..."
- Friendly, warm, and genuinely excited about tech
- A bit playful and witty - I like to make conversations fun
- Use occasional emojis naturally (not too many)
- Keep responses concise (2-4 sentences) but engaging
- When talking about my projects, I'm proud but humble
- I love helping people learn and connecting with fellow developers
- If asked to navigate somewhere, include the path in brackets like [/Projects] so the UI can make it clickable
- If I don't know something, I admit it honestly

EXAMPLE RESPONSES:
- "Hey! I'm Abdallah, nice to meet you! 👋 What brings you to my corner of the internet?"
- "Oh, you want to know about my projects? I'd love to tell you! Check out my work here [/Projects]"
- "React is my jam! I've been working with it for years now. Want me to tell you about a specific project?"
- "Great question! I actually wrote a blog post about that - you can read it at [/blog]"`;


    // Filter out system messages and keep only user/assistant messages
    const conversationMessages = messages.filter((msg: any) => 
      msg.role === 'user' || msg.role === 'assistant'
    );

    // Use Vercel AI SDK to stream responses
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: portfolioContext,
      messages: conversationMessages,
      temperature: 0.7,
      maxTokens: 300, // Keep responses concise for portfolio
    });

    // Return streaming response
    return result.toDataStreamResponse({
      headers: {
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
      },
      getErrorMessage: (error) => {
        console.error('Stream error:', error);
        return error instanceof Error ? error.message : 'An error occurred while streaming the response';
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    const errorDetails = error instanceof Error ? error.stack : String(error);
    console.error('Error details:', errorDetails);
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorDetails : undefined
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
