'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface CaseStudyProps {
  project: {
    name: string;
    description: string;
    status: string;
    tech: string[];
    timeline: string;
    highlights: string[];
    challenges: string[];
    solutions: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

const CaseStudyIDE: React.FC<CaseStudyProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const terminalCommands = [
      `$ git clone ${project.name.toLowerCase().replace(/\s+/g, '-')}`,
      `$ cd ${project.name.toLowerCase().replace(/\s+/g, '-')}`,
      `$ npm install`,
      `$ npm run dev`,
      `✓ Project running successfully!`,
      `✓ Status: ${project.status}`,
      `✓ Timeline: ${project.timeline}`
    ];

    if (currentLine < terminalCommands.length) {
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + terminalCommands[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, 800 + currentLine * 200);
      return () => clearTimeout(timer);
    }
  }, [currentLine, project.name, project.status, project.timeline]);

  const tabs = [
    { id: 'overview', label: 'README.md', icon: '📄' },
    { id: 'tech', label: 'package.json', icon: '📦' },
    { id: 'challenges', label: 'ISSUES.md', icon: '🐛' },
    { id: 'solutions', label: 'SOLUTIONS.md', icon: '💡' }
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="bg-gray-900 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Link href="/#projects" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Close Project
              </Link>
            </Button>
            
            <div className="text-gray-400 text-sm font-mono">
              ~/projects/{project.name.toLowerCase().replace(/\s+/g, '-')}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button size="sm" asChild className="bg-green-600 hover:bg-green-700">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Deploy
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="border-gray-600">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        <div className="w-80 bg-gray-900 border-r border-gray-700 p-4">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-green-400 mb-2">{project.name}</h2>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          <div className="mb-6">
            <div className="text-sm font-mono text-gray-300 mb-2">Explorer</div>
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-mono flex items-center gap-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-black rounded border border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">Terminal</span>
            </div>
            <div className="p-3 h-48 overflow-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                {terminalText}
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-gray-900 border-b border-gray-700 px-4">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-mono border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 bg-gray-800 text-blue-300'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-850'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 p-6 overflow-auto bg-gray-950">
            {activeTab === 'overview' && (
              <div className="font-mono">
                <div className="text-2xl text-green-400 mb-4"># {project.name}</div>
                <div className="text-gray-300 mb-6">{project.description}</div>
                
                <div className="mb-6">
                  <div className="text-blue-400 mb-2">## Project Status</div>
                  <Badge className="bg-green-600">{project.status}</Badge>
                </div>

                <div className="mb-6">
                  <div className="text-blue-400 mb-2">## Timeline</div>
                  <div className="text-gray-300">{project.timeline}</div>
                </div>

                <div className="mb-6">
                  <div className="text-blue-400 mb-2">## Key Features</div>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="font-mono">
                <div className="bg-gray-900 rounded p-4 border border-gray-700">
                  <div className="text-yellow-400 mb-2">{`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-green-400">"name"</span>: <span className="text-yellow-300">"{project.name.toLowerCase().replace(/\s+/g, '-')}"</span>,</div>
                    <div><span className="text-green-400">"dependencies"</span>: {`{`}</div>
                    <div className="pl-4 space-y-1">
                      {project.tech.map((tech, index) => (
                        <div key={index}>
                          <span className="text-green-400">"{tech.toLowerCase()}"</span>: 
                          <span className="text-yellow-300">"^latest"</span>
                          {index < project.tech.length - 1 ? ',' : ''}
                        </div>
                      ))}
                    </div>
                    <div>{`}`}</div>
                  </div>
                  <div className="text-yellow-400">{`}`}</div>
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="font-mono">
                <div className="text-2xl text-red-400 mb-4"># Issues & Challenges</div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-red-900/20 border border-red-700/30 rounded p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-400">🔴</span>
                        <span className="text-red-300 font-semibold">Issue #{index + 1}</span>
                      </div>
                      <div className="text-gray-300">{challenge}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="font-mono">
                <div className="text-2xl text-green-400 mb-4"># Solutions & Learnings</div>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="bg-green-900/20 border border-green-700/30 rounded p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">✅</span>
                        <span className="text-green-300 font-semibold">Solution #{index + 1}</span>
                      </div>
                      <div className="text-gray-300">{solution}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyIDE;
