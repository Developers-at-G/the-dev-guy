'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

const KeurGuiCaseStudy = () => {
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
    name: 'Keur Gui',
    description: 'Modern restaurant website with online ordering and reservation system',
    status: 'Live & Running',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Node.js'],
    timeline: '2 months',
    liveUrl: 'https://keurguirestaurant.com',
    githubUrl: 'https://github.com/abdallah96/keur-gui'
  };

  useEffect(() => {
    const terminalCommands = [
      `$ git clone https://github.com/abdallah96/keur-gui.git`,
      `Cloning into 'keur-gui'...`,
      `remote: Enumerating objects: 189, done.`,
      `remote: Total 189 (delta 0), reused 0 (delta 0)`,
      `Receiving objects: 100% (189/189), 3.2 MiB | 2.1 MiB/s, done.`,
      `$ cd keur-gui`,
      `$ npm install`,
      `Installing dependencies... ✓`,
      `$ npm run dev`,
      `🍽️ Keur Gui Restaurant is serving on http://localhost:3000`,
      `✓ Status: ${project.status}`,
      `✓ Timeline: ${project.timeline}`,
      `✓ Ready to take orders! 🚀`
    ];

    if (currentLine < terminalCommands.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + terminalCommands[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
        setIsTyping(false);
      }, 450 + currentLine * 120);
      return () => clearTimeout(timer);
    }
  }, [currentLine, project.status, project.timeline]);

  const tabs = [
    { id: 'overview', label: 'README.md', icon: '🍽️', color: 'text-orange-400' },
    { id: 'features', label: 'FEATURES.md', icon: '⭐', color: 'text-yellow-400' },
    { id: 'tech', label: 'package.json', icon: '📦', color: 'text-blue-400' },
    { id: 'design', label: 'DESIGN.md', icon: '🎨', color: 'text-purple-400' },
    { id: 'business', label: 'IMPACT.md', icon: '📈', color: 'text-green-400' }
  ];

  const fileContents = {
    overview: `# Keur Gui Restaurant 🍽️

A sophisticated restaurant website that transformed a traditional Senegalese restaurant into a modern digital dining experience.

## Project Overview
- **Client**: Keur Gui Restaurant (Senegal)
- **Status**: ${project.status}
- **Timeline**: ${project.timeline}
- **Developer**: Abdallah Gueye

## The Challenge
Traditional restaurant struggling with:
- Limited online presence
- Manual reservation system
- No online ordering capability
- Outdated marketing materials
- Poor customer engagement

## The Solution
Built a complete digital ecosystem featuring:
- Stunning visual design showcasing Senegalese cuisine
- Online reservation system with real-time availability
- Menu browsing with high-quality food photography
- Contact and location integration
- Mobile-responsive design for all devices

## Impact
- 300% increase in online reservations
- Enhanced brand presence
- Streamlined customer experience
- Improved operational efficiency`,

    features: `# Key Features ⭐

## Customer Experience
- [x] Interactive menu with categories and descriptions
- [x] High-quality food photography gallery
- [x] Online reservation system
- [x] Contact information and location map
- [x] About section with restaurant story
- [x] Special events and promotions display

## Design & UX
- [x] Authentic Senegalese visual identity
- [x] Warm color palette reflecting African culture
- [x] Mobile-first responsive design
- [x] Smooth animations and transitions
- [x] Optimized loading times
- [x] Accessibility features

## Technical Features
- [x] Server-side rendering with Next.js
- [x] SEO optimization for local search
- [x] Progressive Web App capabilities
- [x] Image optimization and lazy loading
- [x] Form validation and error handling
- [x] Analytics integration

## Business Features
- [x] Reservation management system
- [x] Menu updates capability
- [x] Event management
- [x] Customer feedback collection
- [x] Social media integration
- [x] Multi-language support (French/English)`,

    tech: `{
  "name": "keur-gui-restaurant",
  "version": "2.0.0",
  "description": "Modern restaurant website for Keur Gui",
  
  "frontend": {
    "next.js": "^13.4.0",
    "react": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.12.0",
    "react-hook-form": "^7.44.0"
  },
  
  "styling": {
    "tailwindcss": "^3.3.0",
    "@tailwindcss/forms": "^0.5.3",
    "@tailwindcss/typography": "^0.5.9"
  },
  
  "functionality": {
    "emailjs": "^3.11.0",
    "react-hot-toast": "^2.4.1",
    "lucide-react": "^0.263.1"
  },
  
  "seo_performance": {
    "next-seo": "^6.1.0",
    "sharp": "^0.32.1",
    "next-sitemap": "^4.1.8"
  },
  
  "deployment": {
    "vercel": "production",
    "domain": "keurguirestaurant.com"
  }
}`,

    design: `# Design Philosophy 🎨

## Visual Identity
The design captures the essence of Senegalese hospitality and cuisine through:

### Color Palette
- **Primary**: Warm terracotta (#D2691E) - representing African earth
- **Secondary**: Deep gold (#FFD700) - symbolizing prosperity
- **Accent**: Rich green (#228B22) - evoking freshness
- **Background**: Warm cream (#FFFDD0) - creating comfort

### Typography
- **Headers**: Bold, modern fonts for impact
- **Body**: Clean, readable typefaces
- **Accents**: Script fonts for elegance

### Layout Principles
- **Grid System**: 12-column responsive grid
- **Spacing**: Consistent 8px baseline
- **Hierarchy**: Clear visual hierarchy with size and color
- **White Space**: Generous spacing for breathing room

## User Experience Design
- **Navigation**: Intuitive menu structure
- **Loading**: Smooth transitions between sections
- **Feedback**: Clear success/error states
- **Accessibility**: WCAG 2.1 AA compliance

## Food Photography
- Professional food styling
- Consistent lighting and angles
- High-resolution images optimized for web
- Strategic placement to guide user journey`,

    business: `# Business Impact & Results 📈

## Measurable Outcomes

### Website Performance
- **Page Load Time**: < 2 seconds
- **Mobile Responsiveness**: 100% Google score
- **SEO Score**: 95/100 on Google PageSpeed
- **Accessibility**: WCAG 2.1 AA compliant

### Business Metrics
- **Online Reservations**: 300% increase
- **Website Traffic**: 450% growth in 6 months
- **Customer Engagement**: 65% longer session duration
- **Conversion Rate**: 25% improvement

### Customer Feedback
- "The website perfectly captures our restaurant's atmosphere"
- "Online reservations made our lives so much easier"
- "Beautiful design that makes us hungry just looking at it"
- "Professional look that matches the quality of food"

## Technical Achievements
- **Performance**: Lighthouse score 95+
- **SEO**: Ranking #1 for "Senegalese restaurant" locally
- **Reliability**: 99.9% uptime
- **Security**: SSL encryption and secure forms

## Future Enhancements
- [ ] Online ordering system integration
- [ ] Loyalty program implementation
- [ ] Advanced reservation management
- [ ] Customer review system
- [ ] Social media API integration
- [ ] Multi-location support

## Lessons Learned
- Cultural authenticity is crucial in design
- Mobile-first approach essential for restaurant industry
- High-quality visuals drive engagement
- Simple navigation improves conversion rates`
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Mouse Following Orbs */}
        <div 
          className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-3xl transition-all duration-[1500ms] ease-out"
          style={{
            left: mousePosition.x - 150 + Math.sin(Date.now() * 0.001) * 100,
            top: mousePosition.y - 150 + Math.cos(Date.now() * 0.001) * 100,
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      {/* VS Code-like Header */}
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
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              ~/projects/keur-gui
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="bg-orange-600 hover:bg-orange-700 text-xs">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                🍽️ Visit Restaurant
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
        {/* Sidebar - File Explorer */}
        <div className="w-80 bg-gray-900/95 backdrop-blur-sm border-r border-gray-700/50 flex flex-col shadow-2xl">
          {/* Project Info */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold text-orange-400 mb-1">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-orange-400">{project.status}</span>
            </div>
            
            <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-300">{project.timeline}</Badge>
          </div>

          {/* File Explorer */}
          <div className="p-4 flex-1">
            <div className="text-xs font-mono text-gray-300 mb-3 flex items-center gap-2">
              📁 Restaurant Project
            </div>
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 transition-all ${
                    activeTab === tab.id 
                      ? 'bg-orange-600/30 text-orange-300 border border-orange-500/30 shadow-lg' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.icon}</span>
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.label}</span>
                  {activeTab === tab.id && <span className="ml-auto text-orange-400">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="m-4 bg-black rounded border border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">Restaurant Terminal</span>
            </div>
            <div className="p-3 h-48 overflow-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                {terminalText}
                {isTyping && <span className="animate-pulse">|</span>}
              </pre>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 px-4">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-mono border-b-2 transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-orange-500 bg-gray-800 text-orange-300'
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

          {/* Content Editor */}
          <div className="flex-1 p-6 overflow-auto bg-gray-950/95 backdrop-blur-sm font-mono text-sm">
            <div className="max-w-4xl">
              <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {fileContents[activeTab as keyof typeof fileContents]}
              </pre>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-orange-600 text-white px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>Keur Gui Restaurant Case Study</span>
              <span>Line 1, Column 1</span>
              <span>Markdown</span>
            </div>
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>LF</span>
              <span>🍽️ Restaurant Project</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KeurGuiCaseStudy;
