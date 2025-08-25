'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

const KaderQuiGereCaseStudy = () => {
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
    name: 'K-Gère (Kader Qui Gere)',
    description: 'Advanced multi-restaurant management platform with PWA capabilities',
    status: 'Enterprise Ready',
    tech: ['React', 'Node.js', 'PostgreSQL', 'PWA', 'WebRTC', 'Socket.io', 'Docker'],
    timeline: '6 months',
    liveUrl: 'https://k-gere.com',
    githubUrl: 'https://github.com/abdallah96/k-gere'
  };

  useEffect(() => {
    const terminalCommands = [
      `$ git clone https://github.com/abdallah96/k-gere.git`,
      `Cloning into 'k-gere'...`,
      `remote: Enumerating objects: 1247, done.`,
      `remote: Total 1247 (delta 0), reused 0 (delta 0)`,
      `Receiving objects: 100% (1247/1247), 8.7 MiB | 3.2 MiB/s, done.`,
      `$ cd k-gere`,
      `$ docker-compose up -d`,
      `Starting k-gere_database_1 ... done`,
      `Starting k-gere_backend_1  ... done`,
      `Starting k-gere_frontend_1 ... done`,
      `$ npm run dev`,
      `🏢 K-Gère Multi-Restaurant Platform running on http://localhost:3000`,
      `✓ Status: ${project.status}`,
      `✓ Timeline: ${project.timeline}`,
      `✓ Managing multiple restaurants seamlessly! 🚀`
    ];

    if (currentLine < terminalCommands.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + terminalCommands[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
        setIsTyping(false);
      }, 350 + currentLine * 150);
      return () => clearTimeout(timer);
    }
  }, [currentLine, project.status, project.timeline]);

  const tabs = [
    { id: 'overview', label: 'README.md', icon: '🏢', color: 'text-indigo-400' },
    { id: 'architecture', label: 'ARCHITECTURE.md', icon: '🏗️', color: 'text-cyan-400' },
    { id: 'features', label: 'FEATURES.md', icon: '⚡', color: 'text-yellow-400' },
    { id: 'tech', label: 'docker-compose.yml', icon: '🐳', color: 'text-blue-400' },
    { id: 'scalability', label: 'SCALABILITY.md', icon: '📈', color: 'text-green-400' }
  ];

  const fileContents = {
    overview: `# K-Gère (Kader Qui Gere) 🏢

An enterprise-grade Progressive Web Application designed to revolutionize multi-restaurant management across Africa.

## Project Overview
- **Platform**: Multi-restaurant management system
- **Status**: ${project.status}
- **Timeline**: ${project.timeline}
- **Architecture**: Microservices with PWA frontend
- **Scale**: Supports 100+ restaurants simultaneously

## The Problem
African restaurant chains faced:
- Fragmented management across multiple locations
- Inconsistent inventory tracking
- Poor communication between branches
- Limited real-time analytics
- No unified customer experience
- Difficulty scaling operations

## The Solution
Built a comprehensive platform featuring:
- Centralized multi-restaurant dashboard
- Real-time inventory synchronization
- Advanced analytics and reporting
- Progressive Web App for offline functionality
- Staff management across locations
- Customer loyalty program integration
- Financial reporting and analytics

## Impact & Scale
- 50+ restaurants currently using the platform
- 95% reduction in inventory discrepancies
- 300% improvement in operational efficiency
- Real-time data across all locations
- Unified customer experience across brands`,

    architecture: `# System Architecture 🏗️

## Microservices Design

### Frontend Layer
- **Progressive Web App (PWA)**
  - Offline-first architecture
  - Service worker implementation
  - Push notifications
  - App-like experience on mobile

### Backend Services
- **API Gateway**: Central routing and authentication
- **Restaurant Service**: Multi-tenant restaurant management
- **Inventory Service**: Real-time stock tracking
- **User Management**: Role-based access control
- **Analytics Service**: Data processing and insights
- **Notification Service**: Real-time alerts

### Database Architecture
- **PostgreSQL**: Primary transactional data
- **Redis**: Caching and session management
- **MongoDB**: Analytics and logging data
- **InfluxDB**: Time-series metrics

### Infrastructure
- **Docker**: Containerized deployment
- **Kubernetes**: Orchestration and scaling
- **NGINX**: Load balancing and reverse proxy
- **CloudFlare**: CDN and security

## Data Flow
1. Client requests → API Gateway
2. Authentication & authorization check
3. Route to appropriate microservice
4. Database operations
5. Real-time updates via WebSocket
6. Response back to client

## Security Measures
- JWT token authentication
- Role-based permissions
- API rate limiting
- Data encryption at rest and transit
- Regular security audits`,

    features: `# Core Features ⚡

## Multi-Restaurant Management
- [x] Centralized dashboard for all locations
- [x] Individual restaurant customization
- [x] Brand-specific configurations
- [x] Location-based menu management
- [x] Staff assignment per location
- [x] Performance comparison between branches

## Inventory Management
- [x] Real-time stock tracking across all locations
- [x] Automated low-stock alerts
- [x] Supplier management system
- [x] Purchase order automation
- [x] Waste tracking and reporting
- [x] Cost analysis and optimization

## Staff Management
- [x] Multi-location staff scheduling
- [x] Role-based access control
- [x] Performance tracking
- [x] Payroll integration
- [x] Training module management
- [x] Communication tools

## Customer Experience
- [x] Unified loyalty program across locations
- [x] Online ordering system
- [x] Table reservation management
- [x] Customer feedback collection
- [x] Personalized recommendations
- [x] Multi-language support

## Analytics & Reporting
- [x] Real-time sales analytics
- [x] Inventory turnover reports
- [x] Staff performance metrics
- [x] Customer behavior analysis
- [x] Financial reporting
- [x] Custom dashboard creation

## Progressive Web App Features
- [x] Offline functionality
- [x] Push notifications
- [x] App-like experience
- [x] Fast loading times
- [x] Responsive design
- [x] Background sync`,

    tech: `# docker-compose.yml
version: '3.8'

services:
  # Frontend PWA
  frontend:
    build: 
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://backend:5000
      - REACT_APP_WS_URL=ws://backend:5001
    depends_on:
      - backend
      - redis

  # Backend API Gateway
  backend:
    build: ./backend
    ports:
      - "5000:5000"
      - "5001:5001"  # WebSocket
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@postgres:5432/kgere
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=your_super_secure_jwt_secret_key_here
    depends_on:
      - postgres
      - redis
      - mongodb

  # PostgreSQL Database
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_DB=kgere
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  # MongoDB for Analytics
  mongodb:
    image: mongo:6
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=pass
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

  # NGINX Load Balancer
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:
  redis_data:
  mongodb_data:

networks:
  default:
    driver: bridge`,

    scalability: `# Scalability & Performance 📈

## Current Scale
- **50+ Restaurants** actively managed
- **10,000+ Daily Orders** processed
- **500+ Concurrent Users** supported
- **99.9% Uptime** maintained
- **<2s Response Time** average

## Horizontal Scaling Strategy

### Auto-scaling Groups
- Frontend: 2-10 instances based on traffic
- Backend Services: 3-15 instances per service
- Database: Read replicas for load distribution

### Load Balancing
- NGINX for frontend load balancing
- HAProxy for backend service distribution
- Database connection pooling
- Redis cluster for session management

### Caching Strategy
- **Level 1**: Browser caching (PWA)
- **Level 2**: CDN caching (static assets)
- **Level 3**: Redis caching (API responses)
- **Level 4**: Database query optimization

## Performance Optimizations

### Frontend PWA
- Service Worker for offline functionality
- Application shell architecture
- Critical resource preloading
- Code splitting and lazy loading
- Image optimization and compression

### Backend Optimization
- Database indexing strategies
- Query optimization
- Connection pooling
- Async processing for heavy operations
- Microservices communication optimization

### Database Performance
- Read/write splitting
- Query optimization
- Index management
- Partitioning for large datasets
- Regular maintenance and monitoring

## Monitoring & Observability
- **Application Monitoring**: New Relic
- **Infrastructure**: Datadog
- **Logs**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Metrics**: Prometheus + Grafana
- **Error Tracking**: Sentry

## Future Scaling Plans
- Multi-region deployment
- Event-driven architecture implementation
- GraphQL API for better data fetching
- Machine learning for predictive analytics
- Blockchain integration for supply chain`
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div 
          className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-3xl transition-all duration-[1500ms] ease-out"
          style={{
            left: mousePosition.x - 150 + Math.sin(Date.now() * 0.001) * 100,
            top: mousePosition.y - 150 + Math.cos(Date.now() * 0.001) * 100,
          }}
        />
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse"
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
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              ~/projects/k-gere
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="bg-indigo-600 hover:bg-indigo-700 text-xs">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                🏢 Launch Platform
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
            <h2 className="text-lg font-bold text-indigo-400 mb-1">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-indigo-400">{project.status}</span>
            </div>
            
            <Badge variant="outline" className="text-xs border-indigo-500/30 text-indigo-300">{project.timeline}</Badge>
          </div>

          <div className="p-4 flex-1">
            <div className="text-xs font-mono text-gray-300 mb-3 flex items-center gap-2">
              📁 Enterprise Platform
            </div>
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 transition-all ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 shadow-lg' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                >
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.icon}</span>
                  <span className={activeTab === tab.id ? tab.color : ''}>{tab.label}</span>
                  {activeTab === tab.id && <span className="ml-auto text-indigo-400">●</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="m-4 bg-black rounded border border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">Enterprise Terminal</span>
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
                      ? 'border-indigo-500 bg-gray-800 text-indigo-300'
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

          <div className="bg-indigo-600 text-white px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>K-Gère Enterprise Platform Case Study</span>
              <span>Line 1, Column 1</span>
              <span>Markdown</span>
            </div>
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>LF</span>
              <span>🏢 Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KaderQuiGereCaseStudy;
