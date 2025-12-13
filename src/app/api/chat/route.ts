import { NextRequest, NextResponse } from 'next/server';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

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
  Actions: ${project.actions.join('; ')}
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
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

