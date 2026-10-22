import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Chatbot, FloatingContactButton } from "../components/ClientComponents";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Abdalah Amadou Gueye | Software Engineer',
    template: '%s | Abdalah Amadou Gueye',
  },
  description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development. Building scalable applications with a focus on UI/UX and performance.',
  keywords: [
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'UI/UX Design',
    'Frontend Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Abdalah Amadou Gueye' }],
  creator: 'Abdalah Amadou Gueye',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdallah-the-dev-guy.vercel.app',
    siteName: 'Abdalah Amadou Gueye',
    title: 'Abdalah Amadou Gueye | Software Engineer',
    description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdalah Amadou Gueye | Software Engineer',
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
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Analytics />
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Chatbot />
            <FloatingContactButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
