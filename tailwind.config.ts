import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        section: "var(--space-16)",
        "section-sm": "var(--space-12)",
        "section-lg": "var(--space-24)",
        "gap-section": "var(--space-8)",
        "gap-block": "var(--space-6)",
        "gap-tight": "var(--space-2)",
      },
      fontSize: {
        "ds-xs": ["var(--text-xs)", { lineHeight: "var(--leading-normal)" }],
        "ds-sm": ["var(--text-sm)", { lineHeight: "var(--leading-normal)" }],
        "ds-base": ["var(--text-base)", { lineHeight: "var(--leading-normal)" }],
        "ds-lg": ["var(--text-lg)", { lineHeight: "var(--leading-snug)" }],
        "ds-xl": ["var(--text-xl)", { lineHeight: "var(--leading-snug)" }],
        "ds-2xl": ["var(--text-2xl)", { lineHeight: "var(--leading-tight)" }],
        "ds-3xl": ["var(--text-3xl)", { lineHeight: "var(--leading-tight)" }],
        "ds-4xl": ["var(--text-4xl)", { lineHeight: "var(--leading-tight)" }],
        "ds-5xl": ["var(--text-5xl)", { lineHeight: "1.1" }],
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "out-smooth": "var(--ease-out-smooth)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        success: "var(--success)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        content: "68rem",
        prose: "42rem",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
        sm: "0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in var(--duration-normal) var(--ease-out-smooth)",
        "fade-in-up": "fade-in-up var(--duration-normal) var(--ease-out-smooth)",
      },
    },
  },
  plugins: [],
};

export default config;
