import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A3B899",
          foreground: "#5D5C61",
        },
        secondary: {
          DEFAULT: "#FDF8F0",
          foreground: "#5D5C61",
        },
        accent: {
          DEFAULT: "#FAB49B",
          foreground: "#5D5C61",
        },
        success: {
          DEFAULT: "#B2D8D8",
          foreground: "#5D5C61",
        },
        destructive: {
          DEFAULT: "#E88873",
          foreground: "#5D5C61",
        },
        muted: {
          DEFAULT: "#FDF8F0",
          foreground: "#5D5C61",
        },
        card: {
          DEFAULT: "#FDF8F0",
          foreground: "#5D5C61",
        },
        popover: {
          DEFAULT: "#FDF8F0",
          foreground: "#5D5C61",
        },
        sage: "#A3B899",
        sand: "#FDF8F0",
        peach: "#FAB49B",
        volcanic: "#5D5C61",
        mint: "#B2D8D8",
        terracotta: "#E88873",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
