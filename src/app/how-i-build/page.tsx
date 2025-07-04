import React from "react";
import Link from "next/link";

const concepts = [
  {
    title: "Component",
    icon: "🧩",
    description: "A component is a reusable, self-contained piece of UI. In React, everything is a component, from buttons to entire pages. Components help you organize your code and make it modular.",
    code: `function Button({ children }) {\n  return <button>{children}</button>;\n}`,
    why: "Shows I write modular, maintainable code."
  },
  {
    title: "State",
    icon: "🔄",
    description: "State is data that changes over time in your app. React's useState hook lets you add state to your components, enabling interactivity.",
    code: `const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>{count}</button>` ,
    why: "I can build interactive, dynamic UIs."
  },
  {
    title: "Effect",
    icon: "⚡️",
    description: "Effects let you run code in response to changes in your component (like fetching data or setting up a timer). React's useEffect hook is used for this.",
    code: `useEffect(() => {\n  // Run code when component mounts or updates\n}, [dependencies]);`,
    why: "I know how to handle side effects and async logic."
  },
  {
    title: "Context",
    icon: "🌐",
    description: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    code: `const ThemeContext = createContext();\n<ThemeContext.Provider value={theme}>\n  <App />\n</ThemeContext.Provider>` ,
    why: "I can build scalable state management solutions."
  },
  {
    title: "Memo & Callback",
    icon: "⚡️",
    description: "useMemo and useCallback help optimize performance by memoizing values and functions to prevent unnecessary re-renders.",
    code: `const memoizedValue = useMemo(() => \n  expensiveCalculation(a, b), [a, b]\n);\nconst memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);`,
    why: "I write performant React applications."
  },
  {
    title: "Reducer",
    icon: "🔄",
    description: "useReducer is useful for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
    code: `const [state, dispatch] = useReducer(reducer, initialState);\ndispatch({ type: 'INCREMENT' });`,
    why: "I can handle complex state logic efficiently."
  },
  {
    title: "Props",
    icon: "📦",
    description: "Props are how you pass data from parent to child components. They make your components flexible and reusable.",
    code: `<Button label=\"Click me\" />` ,
    why: "I build flexible, reusable components."
  },
  {
    title: "Next.js Routing",
    icon: "🗂️",
    description: "Next.js uses file-based routing. Each file in the 'app' or 'pages' directory becomes a route. This makes navigation and code organization simple.",
    code: `// src/app/about/page.tsx -> /about route` ,
    why: "I organize projects for scalability and easy navigation."
  },
  {
    title: "SSR & SSG",
    icon: "🚀",
    description: "Next.js lets you render pages on the server (SSR) or at build time (SSG) for better performance and SEO.",
    code: `export async function getStaticProps() {\n  // Fetch data at build time\n  return { props: { ... } };\n}` ,
    why: "I care about performance and SEO."
  }
];

export default function HowIBuild() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section with animated gradient */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-primary/30 via-accent/20 to-background opacity-90 blur-2xl" />
        <div className="relative z-10 flex flex-col items-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-primary/30 text-primary font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all duration-200 group"
            aria-label="Back to Portfolio"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-4 tracking-tight drop-shadow-2xl">
            How I Build
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl drop-shadow-lg font-medium">
            My approach to building modern, maintainable, and scalable web applications with React & Next.js.
          </p>
          {/* Knowledge breadth callout */}
          <div className="mt-8 bg-primary/20 border border-primary/40 text-primary-foreground rounded-xl px-6 py-4 shadow-lg max-w-xl text-center text-base font-medium backdrop-blur-md">
            <span className="font-bold">Note:</span> This page highlights the core React & Next.js concepts I use in this portfolio.<br/>
            My experience extends far beyond these—let’s chat if you want to know more!
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto py-24 px-4">
        <ol className="relative border-l-4 border-primary/60 ml-4">
          {concepts.map((c, i) => (
            <li key={c.title} className="mb-20 ml-8 group flex flex-col md:flex-row items-start md:items-center relative animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              {/* Timeline dot */}
              <span className="absolute -left-7 top-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-2xl border-4 border-background z-10 ring-4 ring-primary/30 group-hover:ring-accent/40 transition-all duration-300">
                {c.icon}
              </span>
              {/* Content */}
              <div className="flex-1 bg-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl border-2 border-primary/30 p-10 mb-4 md:mb-0 md:mr-8 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight underline-animate group-hover:underline-animate-active drop-shadow-lg">
                  {c.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed font-medium">
                  {c.description}
                </p>
                <pre className="bg-background/90 text-foreground rounded-xl p-5 text-base overflow-x-auto border-2 border-primary/20 transition-all duration-200 mb-4 group-hover:bg-primary/10 shadow-lg">
                  <code>{c.code}</code>
                </pre>
                <div className="text-base text-primary-foreground bg-primary/90 rounded px-4 py-2 w-fit shadow-md mb-2 font-semibold">
                  <span className="font-bold">Why it matters:</span> {c.why}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
} 