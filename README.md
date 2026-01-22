# Abdallah Amadou Gueye - Portfolio

A modern, interactive portfolio website showcasing my work as a Frontend / Product Engineer. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

**Visit the portfolio:** [abdallah-the-dev-guy.vercel.app](https://abdallah-the-dev-guy.vercel.app)

## ✨ Features

### Core Features
- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Bilingual Support**: Full English and French localization
- **AI-Powered Chatbot**: Interactive chatbot using Vercel AI SDK and OpenAI
- **Dark/Light Theme**: System-aware theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Performance Optimized**: Lazy loading, code splitting, and optimized images

### Content Sections
- **Hero Section**: Animated introduction with key stats
- **Projects Showcase**: 7+ featured projects with case studies
- **Professional Experience**: Timeline of work at Smal GmbH, Future Stories, and Obertys
- **Skills Visualization**: Interactive skill tree with proficiency levels
- **Education**: Academic background and achievements
- **Blog**: Technical articles and insights
- **Frontend Architecture**: Deep dive into how I structure Next.js applications
- **Contact**: Multiple ways to get in touch

### Technical Highlights
- **Server Components**: Leveraging Next.js 15 App Router for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Database**: Prisma ORM with PostgreSQL
- **Animations**: Framer Motion for smooth, performant animations
- **Analytics**: Vercel Analytics integration
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.8
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **UI Components**: Custom component system with Radix UI primitives

### Backend & Database
- **ORM**: Prisma 5.22.0
- **Database**: PostgreSQL
- **API Routes**: Next.js API routes with middleware

### AI & Integrations
- **AI SDK**: Vercel AI SDK 4.0.0
- **LLM**: OpenAI GPT models
- **Analytics**: Vercel Analytics

### Development Tools
- **Linting**: ESLint with Next.js config
- **Testing**: Vitest, Playwright
- **Package Manager**: npm/yarn

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun
- PostgreSQL database (for blog comments and interactions)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdallah96/the-dev-guy.git
   cd the-dev-guy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Required environment variables:
   ```env
   DATABASE_URL="postgresql://..."
   OPENAI_API_KEY="sk-..."
   NEXTAUTH_SECRET="..."
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   # or
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
the-dev-guy/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes (blog, chat)
│   │   ├── blog/              # Blog pages
│   │   ├── case-studies/      # Project case studies
│   │   ├── frontend-architecture/ # Architecture guide
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   ├── ui/                # Reusable UI components
│   │   └── Chatbot/           # AI chatbot component
│   ├── data/                  # Data layer
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and helpers
│   ├── locales/               # i18n translations (en/fr)
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── prisma/                    # Database schema
└── README.md
```

## 🎨 Key Features Explained

### AI Chatbot
The portfolio includes an interactive chatbot powered by Vercel AI SDK and OpenAI. Visitors can ask questions about projects, skills, or experience. Features include:
- Streaming responses for natural conversation flow
- Rate limiting (10 chats per IP per day)
- Context-aware responses based on portfolio content

### Bilingual Support
Full internationalization with English and French translations. Language switching is seamless and persists across sessions.

### Case Studies
Detailed case studies for major projects, including:
- Problem statement
- Technical implementation
- Challenges and solutions
- Results and impact

### Performance
- Server-side rendering (SSR) for SEO
- Static site generation (SSG) where appropriate
- Incremental static regeneration (ISR) for blog posts
- Image optimization with Next.js Image component
- Code splitting and lazy loading

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma studio    # Open Prisma Studio

# Linting
npm run lint         # Run ESLint
```

## 🚢 Deployment

The portfolio is deployed on [Vercel](https://vercel.com) with:
- Automatic CI/CD from GitHub
- Edge network for global performance
- Analytics and monitoring
- Environment variable management

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy!

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2s on 3G connection

## 🤝 Contributing

This is my personal portfolio, but I'm always open to feedback and suggestions! Feel free to:
- Open an issue for bugs or improvements
- Suggest new features
- Share your thoughts on the design or implementation

## 📄 License

This project is private and personal. All rights reserved.

## 📧 Contact

- **Email**: gueye.amadou1996@gmail.com
- **LinkedIn**: [abdalah-amadou-gueye](https://www.linkedin.com/in/abdalah-amadou-gueye/)
- **GitHub**: [@abdallah96](https://github.com/abdallah96)
- **Portfolio**: [abdallah-the-dev-guy.vercel.app](https://abdallah-the-dev-guy.vercel.app)

---

**Built with ❤️ by Abdallah Amadou Gueye**
