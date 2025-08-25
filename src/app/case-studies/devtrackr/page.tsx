'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

const DevTrackrCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const project = {
    name: 'DevTrackr',
    description: 'A modern task and journaling app built with full-stack technologies',
    status: 'Production Ready',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    timeline: '3 months',
    liveUrl: 'https://devtrackr.live',
    githubUrl: 'https://github.com/abdallah96/devtrackr'
  };

  useEffect(() => {
    const terminalCommands = [
      `$ git clone https://github.com/abdallah96/devtrackr.git`,
      `Cloning into 'devtrackr'...`,
      `remote: Enumerating objects: 247, done.`,
      `remote: Total 247 (delta 0), reused 0 (delta 0)`,
      `Receiving objects: 100% (247/247), 2.1 MiB | 1.2 MiB/s, done.`,
      `$ cd devtrackr`,
      `$ npm install`,
      `Installing dependencies... ✓`,
      `$ npm run dev`,
      `⚡ DevTrackr is running on http://localhost:3000`,
      `✓ Status: ${project.status}`,
      `✓ Timeline: ${project.timeline}`
    ];

    if (currentLine < terminalCommands.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + terminalCommands[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
        setIsTyping(false);
      }, 400 + currentLine * 100);
      return () => clearTimeout(timer);
    }
  }, [currentLine, project.status, project.timeline]);

  const tabs = [
    { id: 'overview', label: 'README.md', icon: '📄', color: 'text-blue-400' },
    { id: 'features', label: 'FEATURES.md', icon: '⚡', color: 'text-green-400' },
    { id: 'tech', label: 'package.json', icon: '📦', color: 'text-yellow-400' },
    { id: 'challenges', label: 'ISSUES.md', icon: '🐛', color: 'text-red-400' },
    { id: 'demo', label: 'DEMO.md', icon: '🚀', color: 'text-purple-400' }
  ];

  const fileContents = {
    overview: `# DevTrackr 🚀

A powerful task management and developer journaling application that helps developers track their progress, manage tasks, and reflect on their coding journey.

## Project Overview
- **Status**: ${project.status}
- **Timeline**: ${project.timeline}
- **Team**: Solo Developer (Abdallah Gueye)

## What Problem Does It Solve?
Developers often struggle to:
- Keep track of multiple tasks and deadlines
- Maintain consistent journaling habits
- Reflect on their learning progress
- Organize their development workflow

DevTrackr provides a unified solution for task management and developer reflection.`,

    features: `# Core Features ⚡

## Task Management
- [x] Create, edit, and delete tasks
- [x] Priority levels (High, Medium, Low)
- [x] Due date tracking
- [x] Status updates (Todo, In Progress, Done)
- [x] Task filtering and search

## Developer Journaling
- [x] Daily coding journal entries
- [x] Reflection prompts
- [x] Progress tracking
- [x] Mood and productivity indicators
- [x] Code snippet integration

## User Experience
- [x] Responsive design for all devices
- [x] Dark/Light theme toggle
- [x] Intuitive dashboard
- [x] Real-time updates
- [x] Smooth animations and transitions

## Technical Features
- [x] JWT Authentication
- [x] RESTful API design
- [x] Database optimization
- [x] Error handling and validation
- [x] Secure password hashing`,

    tech: `{
  "name": "devtrackr",
  "version": "1.0.0",
  "description": "Task management and journaling for developers",
  
  "frontend": {
    "react": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "react-hot-toast": "^2.4.0"
  },
  
  "backend": {
    "node.js": "^18.0.0",
    "express": "^4.18.0",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5"
  },
  
  "database": {
    "postgresql": "^14.0.0",
    "pg": "^8.10.0"
  },
  
  "deployment": {
    "vercel": "frontend",
    "railway": "backend",
    "neon": "database"
  }
}`,

    challenges: `# Challenges & Solutions 🐛

## Challenge 1: Real-time Task Updates
**Problem**: Multiple users updating tasks simultaneously caused conflicts.

**Solution**: 
- Implemented optimistic updates
- Added conflict resolution strategies
- Used websockets for real-time sync

## Challenge 2: Performance with Large Datasets
**Problem**: App became slow with 1000+ tasks and journal entries.

**Solution**:
- Implemented pagination
- Added database indexing
- Created efficient query optimization
- Used virtual scrolling for large lists

## Challenge 3: User Authentication Security
**Problem**: Securing user data and preventing unauthorized access.

**Solution**:
- JWT token implementation
- Password hashing with bcrypt
- Rate limiting for API endpoints
- Input validation and sanitization

## Challenge 4: Mobile Responsiveness
**Problem**: Complex dashboard layout breaking on mobile devices.

**Solution**:
- Mobile-first design approach
- Flexible grid system
- Touch-friendly interactions
- Progressive web app features`,

    demo: `# Live Demo & Usage 🚀

## Try It Live
🌐 **Production**: https://devtrackr.live
📱 **Mobile**: Fully responsive, try on any device!

## Quick Start Guide

### 1. Sign Up
- Create your developer account
- Choose your preferred theme
- Set up your profile

### 2. Create Your First Task
- Click "New Task" button
- Add title, description, priority
- Set due date and category
- Save and start tracking!

### 3. Start Journaling
- Navigate to Journal section
- Write about your coding day
- Add code snippets
- Track your mood and productivity

### 4. Monitor Progress
- View your dashboard
- Check completion statistics
- Review journal insights
- Celebrate your achievements!

## Test Credentials
**Email**: demo@devtrackr.com
**Password**: demo123

> Feel free to explore all features with the demo account!`
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div 
          className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-3xl transition-all duration-[1500ms] ease-out"
          style={{
            left: mousePosition.x - 150 + Math.sin(Date.now() * 0.001) * 100,
            top: mousePosition.y - 150 + Math.cos(Date.now() * 0.001) * 100,
          }}
        />
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 text-xs">
              <Link href="/#projects" className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Close Project
              </Link>
            </Button>
            
            <div className="text-gray-400 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              ~/projects/devtrackr
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-xs">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                🚀 Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="border-gray-600 text-xs">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                💻 Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-screen">
        <div className="w-80 bg-gray-900/95 backdrop-blur-sm border-r border-gray-700/50 flex flex-col shadow-2xl">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold text-green-400 mb-1">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-400">{project.status}</span>
            </div>
            
            <Badge variant="outline" className="text-xs">{project.timeline}</Badge>
          </div>

          <div className="p-4 flex-1">
            <div className="text-xs font-mono text-gray-300 mb-3 flex items-center gap-2">
              📁 Explorer
            </div>
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30 shadow-lg' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.icon}</span>
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.label}</span>
                  {activeTab === tab.id && <span className="ml-auto text-blue-400">●</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="m-4 bg-black rounded border border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">Terminal</span>
            </div>
            <div className="p-3 h-48 overflow-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                {terminalText}
                {isTyping && <span className="animate-pulse">|</span>}
              </pre>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 px-4">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-mono border-b-2 transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 bg-gray-800 text-blue-300'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-850'
                  }`}
                >
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.icon}</span>
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.label}</span>
                  {activeTab === tab.id && (
                    <button className="ml-2 text-gray-500 hover:text-gray-300">×</button>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 p-6 overflow-auto bg-gray-950/95 backdrop-blur-sm font-mono text-sm">
            <div className="max-w-4xl">
              <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {fileContents[activeTab as keyof typeof fileContents]}
              </pre>
            </div>
          </div>

          <div className="bg-blue-600 text-white px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>DevTrackr Case Study</span>
              <span>Line 1, Column 1</span>
              <span>Markdown</span>
            </div>
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>LF</span>
              <span>{activeTab === 'overview' ? '📄' : activeTab === 'tech' ? '📦' : activeTab === 'challenges' ? '🐛' : activeTab === 'demo' ? '🚀' : '⚡'}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DevTrackrCaseStudy;
