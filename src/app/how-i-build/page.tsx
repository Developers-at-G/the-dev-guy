'use client';
import React from "react";
import Link from "next/link";

const techStack = [
  { name: "React", icon: "⚛️", experience: "2+ years" },
  { name: "Next.js", icon: "🚀", experience: "2+ years" },
  { name: "TypeScript", icon: "📘", experience: "1+ year" },
  { name: "Node.js", icon: "💚", experience: "1+ year" },
  { name: "PostgreSQL", icon: "🐘", experience: "1+ year" },
  { name: "Tailwind CSS", icon: "🎨", experience: "2+ years" }
];

function ClientHowIBuild() {

  return (
    <main className="min-h-screen bg-background">
      <section className="py-14">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="/" className="text-sm px-3 py-1.5 rounded-md border hover:bg-primary/10">
              ← Back to Portfolio
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">My Tech Stack</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to build modern web applications
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="rounded-xl border bg-background/60 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience: {tech.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HowIBuild() {
  return <ClientHowIBuild />;
} 