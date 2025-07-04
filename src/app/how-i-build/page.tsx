'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { useLanguage } from "../context/LanguageContext";

const concepts = [
  {
    key: "component",
    icon: "🧩",
  },
  {
    key: "state",
    icon: "🔄",
  },
  {
    key: "effect",
    icon: "⚡️",
  },
  {
    key: "context",
    icon: "🌐",
  },
  {
    key: "memo",
    icon: "⚡️",
  },
  {
    key: "reducer",
    icon: "🔄",
  },
  {
    key: "props",
    icon: "📦",
  },
  {
    key: "routing",
    icon: "🗂️",
  },
  {
    key: "ssr",
    icon: "🚀",
  }
];

function ClientHowIBuild() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section with animated gradient */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-primary/30 via-accent/20 to-background opacity-90 blur-2xl" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group"
              aria-label="Back to Portfolio"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              <span>{t('howibuild.back')}</span>
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-4 tracking-tight drop-shadow-2xl">
            {t('howibuild.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl drop-shadow-lg font-medium">
            {t('howibuild.subtitle')}
          </p>
          {/* Knowledge breadth callout */}
          <div className="mt-8 bg-primary/20 border border-primary/40 text-primary-foreground rounded-xl px-6 py-4 shadow-lg max-w-xl text-center text-base font-medium backdrop-blur-md">
            <span className="font-bold">Note:</span> {t('howibuild.note')}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto py-24 px-4">
        <ol className="relative border-l-4 border-primary/60 ml-4">
          {concepts.map((c, i) => (
            <li key={c.key} className="mb-20 ml-8 group flex flex-col md:flex-row items-start md:items-center relative animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              {/* Timeline dot */}
              <span className="absolute -left-7 top-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-2xl border-4 border-background z-10 ring-4 ring-primary/30 group-hover:ring-accent/40 transition-all duration-300">
                {c.icon}
              </span>
              {/* Content */}
              <div className="flex-1 bg-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl border-2 border-primary/30 p-10 mb-4 md:mb-0 md:mr-8 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight underline-animate group-hover:underline-animate-active drop-shadow-lg">
                  {t(`howibuild.${c.key}_title`)}
                </h2>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed font-medium">
                  {t(`howibuild.${c.key}_desc`)}
                </p>
                <pre className="bg-background/90 text-foreground rounded-xl p-5 text-base overflow-x-auto border-2 border-primary/20 transition-all duration-200 mb-4 group-hover:bg-primary/10 shadow-lg">
                  <code>{getCodeExample(c.key)}</code>
                </pre>
                <div className="text-base text-primary-foreground bg-primary/90 rounded px-4 py-2 w-fit shadow-md mb-2 font-semibold">
                  <span className="font-bold">{t('howibuild.why_matters')}</span> {t(`howibuild.${c.key}_why`)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

function getCodeExample(key: string): string {
  const examples: { [key: string]: string } = {
    component: `function Button({ children }) {\n  return <button>{children}</button>;\n}`,
    state: `const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>{count}</button>`,
    effect: `useEffect(() => {\n  // Run code when component mounts or updates\n}, [dependencies]);`,
    context: `const ThemeContext = createContext();\n<ThemeContext.Provider value={theme}>\n  <App />\n</ThemeContext.Provider>`,
    memo: `const memoizedValue = useMemo(() => \n  expensiveCalculation(a, b), [a, b]\n);\nconst memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);`,
    reducer: `const [state, dispatch] = useReducer(reducer, initialState);\ndispatch({ type: 'INCREMENT' });`,
    props: `<Button label="Click me" />`,
    routing: `// src/app/about/page.tsx -> /about route`,
    ssr: `export async function getStaticProps() {\n  // Fetch data at build time\n  return { props: { ... } };\n}`
  };
  return examples[key] || '';
}

export default function HowIBuild() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <ClientHowIBuild />;
} 