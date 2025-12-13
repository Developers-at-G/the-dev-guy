import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { CustomCursor } from "../components/CustomCursor";
import { Chatbot } from "../components/Chatbot/Chatbot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Abdallah Amadou Gueye | Software Engineer & Full-Stack Developer',
    template: '%s | Abdallah Amadou Gueye',
  },
  description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development. Building scalable applications with a focus on UI/UX and performance.',
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'UI/UX Design',
    'Frontend Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Abdallah Amadou Gueye' }],
  creator: 'Abdallah Amadou Gueye',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdallah-the-dev-guy.vercel.app',
    siteName: 'Abdallah Amadou Gueye',
    title: 'Abdallah Amadou Gueye | Software Engineer & Full-Stack Developer',
    description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdallah Amadou Gueye | Software Engineer',
    description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#818cf8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Analytics />
        <CustomCursor />
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Chatbot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
