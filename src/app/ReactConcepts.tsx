import React from "react";

const concepts = [
  {
    title: "Component",
    icon: "🧩",
    description: "A component is a reusable, self-contained piece of UI. In React, everything is a component, from buttons to entire pages. Components help you organize your code and make it modular.",
    code: `function Button({ children }) {
  return <button>{children}</button>;
}`,
    usage: "All sections of this portfolio (Profile, Skills, etc.) are built as React components.",
    why: "Shows I write modular, maintainable code."
  },
  {
    title: "State",
    icon: "🔄",
    description: "State is data that changes over time in your app. React's useState hook lets you add state to your components, enabling interactivity.",
    code: `const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>` ,
    usage: "The typewriter animation in the hero uses state to track the current phrase and character index.",
    why: "I can build interactive, dynamic UIs."
  },
  {
    title: "Effect",
    icon: "⚡️",
    description: "Effects let you run code in response to changes in your component (like fetching data or setting up a timer). React's useEffect hook is used for this.",
    code: `useEffect(() => {
  // Run code when component mounts or updates
}, [dependencies]);`,
    usage: "The typewriter effect uses useEffect to update the displayed text at intervals.",
    why: "I know how to handle side effects and async logic."
  },
  {
    title: "Props",
    icon: "📦",
    description: "Props are how you pass data from parent to child components. They make your components flexible and reusable.",
    code: `<Button label=\"Click me\" />` ,
    usage: "The Skills section passes skill data as props to each SkillCard component.",
    why: "I build flexible, reusable components."
  },
  {
    title: "Next.js Routing",
    icon: "🗂️",
    description: "Next.js uses file-based routing. Each file in the 'app' or 'pages' directory becomes a route. This makes navigation and code organization simple.",
    code: `// src/app/about/page.tsx -> /about route` ,
    usage: "Each section of this portfolio could be a separate route if needed.",
    why: "I organize projects for scalability and easy navigation."
  },
  {
    title: "SSR & SSG",
    icon: "🚀",
    description: "Next.js lets you render pages on the server (SSR) or at build time (SSG) for better performance and SEO.",
    code: `export async function getStaticProps() {
  // Fetch data at build time
  return { props: { ... } };
}` ,
    usage: "For a blog, SSG can be used to generate pages for each post at build time.",
    why: "I care about performance and SEO."
  }
];

const ReactConcepts = () => (
  <section className="section bg-background border-t border-border" id="react-concepts">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          How I Build with <span className="text-gradient">React & Next.js</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My approach to building modern, maintainable, and scalable web applications.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {concepts.map((c) => (
          <div
            key={c.title}
            className="relative group card p-7 flex flex-col gap-4 bg-white/15 backdrop-blur-lg border-2 border-primary/20 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-1 hover:scale-105 cursor-pointer overflow-hidden"
            tabIndex={0}
            aria-label={c.title}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl md:text-4xl drop-shadow-lg">{c.icon}</span>
              <h3 className="text-xl font-semibold text-primary mb-0">{c.title}</h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">{c.description}</p>
            <pre className="bg-background/80 text-foreground rounded-lg p-4 text-sm overflow-x-auto border border-border transition-all duration-200 group-hover:bg-primary/10"><code>{c.code}</code></pre>
            <div className="text-sm text-accent-foreground bg-accent/10 rounded px-3 py-2">
              <span className="font-medium">In this portfolio:</span> {c.usage}
            </div>
            <div className="text-xs text-primary-foreground bg-primary/80 rounded px-2 py-1 mt-2 w-fit shadow-md">
              <span className="font-semibold">Why it matters for you:</span> {c.why}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReactConcepts; 