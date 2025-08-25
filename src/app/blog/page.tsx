'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';

const codeSnippets = [
  `const insight = await buildRealProject();`,
  `if (tutorial.isComplete()) { reality.hits(); }`,
  `while (learning) { challenge.overcome(); }`,
  `function growthMindset() { return experience > tutorials; }`,
  `// Real projects teach what tutorials can't`
];

const BlogPage = () => {
  // Removed unused currentSnippet state to satisfy linting
  const [, setCurrentSnippet] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transform: `translate(${Math.sin(Date.now() / 2000) * 50}px, ${Math.cos(Date.now() / 2000) * 50}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: mousePosition.x / 4,
            bottom: mousePosition.y / 4,
            transform: `translate(${Math.cos(Date.now() / 3000) * 30}px, ${Math.sin(Date.now() / 3000) * 30}px)`
          }}
        />
      </div>


      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 font-mono text-sm"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {`</>`}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6">
          <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              /portfolio
            </Link>
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">blog.active</span>
          </div>
        </nav>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-mono text-green-400 mb-2">{"// Featured Article"}</h2>
              <div className="h-px bg-gradient-to-r from-green-400 to-transparent"></div>
            </div>

            <Link href="/blog/why-building-real-projects-taught-me-more-than-any-tutorial">
              <div 
                className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden group cursor-pointer hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] relative"

              >
                <div className="absolute top-2 right-2 bg-blue-500/20 border border-blue-500/30 rounded px-2 py-1 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to read →
                </div>
              <div className="flex items-center gap-1 px-1 py-2 bg-gray-800/50 border-b border-gray-700/50">
                <div className="bg-gray-700/50 px-3 py-1 rounded-t text-xs text-gray-300 font-mono border-t border-l border-r border-gray-600/50">
                  real-projects-vs-tutorials.js
                </div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">1</div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">article</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-yellow-400">{`{`}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">2</div>
                    <div className="pl-4">
                      <span className="text-green-400">title</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-yellow-300">"Why Building Real Projects Taught Me More"</span>
                      <span className="text-white">,</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">3</div>
                    <div className="pl-4">
                      <span className="text-green-400">insights</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-yellow-300">"Real mess of real apps"</span>
                      <span className="text-white">,</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">4</div>
                    <div className="pl-4">
                      <span className="text-green-400">published</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-yellow-300">"January 2025"</span>
                      <span className="text-white">,</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">5</div>
                    <div className="pl-4">
                      <span className="text-green-400">readTime</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-blue-300">5</span>
                      <span className="text-white">,</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">6</div>
                    <div className="pl-4">
                      <span className="text-green-400">impact</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-yellow-300">"Mind-blowing realizations"</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">7</div>
                    <div>
                      <span className="text-yellow-400">{`};`}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <div className="text-gray-500 select-none">8</div>
                    <div></div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">9</div>
                    <div>
                      <span className="text-gray-500">{"// 👇 Click to execute reading function"}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-gray-500 select-none">10</div>
                    <div>
                      <span className="text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30 hover:border-blue-400/50 inline-flex items-center gap-2 group/link">
                        <span className="group-hover/link:animate-pulse">▶</span>
                        article.read()
                        <span className="text-xs opacity-70">{"// Click me!"}</span>
                      </span>
                      <span className="text-white">;</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-mono text-purple-400 mb-2">{"// git log --upcoming"}</h2>
              <div className="h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>

            <div className="space-y-4">
              {[
                { hash: 'a1b2c3d', message: 'feat: Will AI replace developers?', author: 'abdallah', date: 'Coming Soon' },
                { hash: 'e4f5g6h', message: 'docs: Best Practices Coding', author: 'abdallah', date: 'Coming Soon' },
              ].map((commit, index) => (
                <div key={index} className="bg-gray-900/50 rounded border border-gray-700/30 p-4 font-mono text-sm hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-yellow-400">{commit.hash}</span>
                    <span className="text-white flex-1">{commit.message}</span>
                    <span className="text-gray-400">{commit.author}</span>
                    <span className="text-gray-500">{commit.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="font-mono text-gray-400 mb-4">
              <span className="text-green-400">console.log</span>
              <span className="text-white">(</span>
              <span className="text-yellow-300">"Thanks for visiting my blog!"</span>
              <span className="text-white">);</span>
            </div>
            <div className="text-gray-500 text-sm">
              Built with passion, powered by real experiences.
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </main>
  );
};

export default BlogPage;