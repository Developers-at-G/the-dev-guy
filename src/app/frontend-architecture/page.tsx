import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Navigation from '../Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Frontend Architecture',
  description: 'How I structure and build modern Next.js applications: architectural decisions, component systems, and performance strategies.',
};

export default function FrontendArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="pt-16">
        <Container size="lg" className="py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <Button variant="outline" size="sm" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frontend Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              How I structure and build modern Next.js applications: architectural decisions, component systems, and performance strategies.
            </p>
            <div className="mt-6 h-px w-24 bg-primary" />
          </div>

          {/* Next.js App Structure */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Next.js App Structure
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Server Components vs Client Components</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Default to Server Components:</strong> Most UI is server-rendered by default. Reduces bundle size, improves initial load, and enables direct database access.</li>
                  <li><strong className="text-foreground">Client Components for interactivity:</strong> Only use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">'use client'</code> when needed: event handlers, browser APIs, state hooks, or third-party libraries requiring client-side execution.</li>
                  <li><strong className="text-foreground">Boundary strategy:</strong> Push client boundaries as low as possible. Keep layouts and page shells as Server Components; isolate interactivity to leaf components.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Fetching Strategy</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Server-first approach:</strong> Fetch data in Server Components using async/await. No loading states needed—data is available on first render.</li>
                  <li><strong className="text-foreground">Streaming with Suspense:</strong> Use React Suspense boundaries to stream partial UI while slower data fetches complete. Critical content renders first.</li>
                  <li><strong className="text-foreground">Caching layers:</strong> Leverage Next.js caching (fetch cache, full route cache, router cache) strategically. Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">revalidate</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">cache: 'no-store'</code> for dynamic content.</li>
                  <li><strong className="text-foreground">Parallel data fetching:</strong> Fetch independent data sources in parallel within the same component to minimize waterfall requests.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Rendering Strategies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SSR (Server-Side Rendering)</h4>
                    <p className="ml-4">Default for dynamic routes. Use for personalized content, real-time data, or SEO-critical pages that change frequently.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SSG (Static Site Generation)</h4>
                    <p className="ml-4">Generate at build time. Ideal for marketing pages, documentation, blog posts—any content that doesn't change per user or request.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">ISR (Incremental Static Regeneration)</h4>
                    <p className="ml-4">Best of both worlds: static performance with periodic updates. Perfect for product catalogs, news sites, or any content that updates on a schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component System */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Component System
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Architecture Layers</h3>
                
                {/* Visual Diagram */}
                <div className="my-6 space-y-4 max-w-2xl">
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Page Components
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">Route-level composition, data fetching, layout orchestration</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Composite Components
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">Business logic, feature-specific UI, composed from primitives</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      UI Primitives
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">Reusable, unstyled or minimally styled building blocks (Button, Card, Input, etc.)</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Composition & Reuse</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Compound components:</strong> Build flexible APIs using composition patterns. Components work together through context or prop drilling, not rigid parent-child relationships.</li>
                  <li><strong className="text-foreground">Render props & slots:</strong> Use children as functions or slot patterns for maximum flexibility without prop drilling.</li>
                  <li><strong className="text-foreground">Polymorphic components:</strong> Components that can render as different HTML elements or custom components via an <code className="bg-muted px-1.5 py-0.5 rounded text-sm">as</code> prop.</li>
                  <li><strong className="text-foreground">Co-location:</strong> Keep related components, hooks, and utilities together. Feature folders over type-based organization.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* State Management */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              State Management Philosophy
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">State Location Strategy</h3>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      URL State
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      <li>Filters & search</li>
                      <li>Pagination</li>
                      <li>Modal/dialog IDs</li>
                      <li>Shareable views</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Server State
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      <li>User data</li>
                      <li>API responses</li>
                      <li>Cacheable content</li>
                      <li>Server mutations</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Client State
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      <li>UI toggles</li>
                      <li>Form drafts</li>
                      <li>Client-only interactions</li>
                      <li>Temporary UI state</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">When to Use Global State</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Avoid unless necessary:</strong> Most state should be local. Global state (Context, Zustand, etc.) is justified for: theme preferences, authenticated user data, or truly shared state across distant components.</li>
                  <li><strong className="text-foreground">Server state libraries:</strong> Use React Query or SWR for server state management. They handle caching, refetching, and synchronization automatically.</li>
                  <li><strong className="text-foreground">Form state:</strong> Prefer React Hook Form or similar for complex forms. Local state for simple inputs.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance & DX */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Performance & Developer Experience
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Code Splitting & Dynamic Imports</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Route-based splitting:</strong> Automatic with App Router. Each route is a separate chunk.</li>
                  <li><strong className="text-foreground">Component-level splitting:</strong> Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">next/dynamic</code> with <code className="bg-muted px-1.5 py-0.5 rounded text-sm">loading</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">ssr: false</code> for heavy client-only components (charts, editors).</li>
                  <li><strong className="text-foreground">Third-party libraries:</strong> Lazy load heavy dependencies that aren't needed on initial render.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Image & Font Optimization</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Next.js Image:</strong> Always use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">next/image</code>. Automatic format optimization, lazy loading, and responsive sizing.</li>
                  <li><strong className="text-foreground">Font loading:</strong> Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">next/font</code> for automatic optimization, subsetting, and zero layout shift. Prefer variable fonts when possible.</li>
                  <li><strong className="text-foreground">Resource hints:</strong> Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm">preload</code> for critical resources, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">prefetch</code> for likely next-page navigations.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Memoization Strategy</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Measure first:</strong> Don't memoize prematurely. Use React DevTools Profiler to identify actual bottlenecks.</li>
                  <li><strong className="text-foreground">When to memoize:</strong> Expensive computations, components that re-render frequently with same props, or preventing child re-renders in tight loops.</li>
                  <li><strong className="text-foreground">Avoid over-memoization:</strong> Most components don't need <code className="bg-muted px-1.5 py-0.5 rounded text-sm">memo</code>. Server Components can't be memoized anyway.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Observability</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">Vercel Analytics:</strong> Built-in Web Vitals tracking, Core Web Vitals monitoring, and real user metrics.</li>
                  <li><strong className="text-foreground">Structured logging:</strong> Use consistent log formats. Include request IDs, user context, and error boundaries for production debugging.</li>
                  <li><strong className="text-foreground">Error boundaries:</strong> Wrap route segments in error boundaries. Graceful degradation, not white screens.</li>
                  <li><strong className="text-foreground">Performance budgets:</strong> Set and monitor bundle size limits, Core Web Vitals thresholds, and API response time SLAs.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              This architecture evolves with Next.js and React. Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}

