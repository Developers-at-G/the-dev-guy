import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Abdallah Amamou Gueye",
  description: "Detailed case studies of my projects, showcasing technical implementation, challenges, and solutions.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 