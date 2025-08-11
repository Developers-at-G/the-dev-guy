'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-14">
        <div className="container mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Link href="/" className="text-sm px-3 py-1.5 rounded-md border hover:bg-primary/10">
              ← {t('howibuild.back')}
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">{t('howibuild.title')}</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{t('howibuild.subtitle')}</p>
          <p className="mt-4 text-xs md:text-sm text-primary-foreground bg-primary/20 border border-primary/30 inline-block px-3 py-2 rounded-md">
            <strong>Note:</strong> {t('howibuild.note')}
          </p>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {concepts.map((c) => {
              const isOpen = open.has(c.key);
              return (
                <article key={c.key} className="rounded-2xl border bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-foreground truncate">
                        {t(`howibuild.${c.key}_title`)}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
                        {t(`howibuild.${c.key}_desc`)}
                      </p>
                      <div className="mt-2 text-[12px] text-primary-foreground bg-primary/20 inline-block px-2 py-1 rounded">
                        {t('howibuild.why_matters')} {t(`howibuild.${c.key}_why`)}
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => toggle(c.key)}
                          className={`text-sm px-3 py-1.5 rounded-md border ${isOpen ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-primary/10'}`}
                          aria-expanded={isOpen}
                          aria-controls={`code-${c.key}`}
                        >
                          {isOpen ? 'Hide example' : 'View example'}
                        </button>
                      </div>
                    </div>
                  </div>
                  {isOpen && (
                    <pre id={`code-${c.key}`} className="mt-3 bg-background text-foreground rounded-xl p-3 text-xs overflow-x-auto border">
                      <code>{getCodeExample(c.key)}</code>
                    </pre>
                  )}
                </article>
              );
            })}
          </div>
        </div>
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