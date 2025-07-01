import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        gotham: ["Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors for Amp
        amp: {
          green: "#C4FF00",
          orange: "#FF4E00",
          purple: "#B0A6FF",
          black: "#1A1A1A",
          white: "#FFFFFF",
          grey: "#CCCCCC",
          button: "#000000",
        },
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
        "wave-1": {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "25%": { transform: "scaleY(1.2)" },
          "50%": { transform: "scaleY(0.6)" },
          "75%": { transform: "scaleY(0.9)" },
        },
        "wave-2": {
          "0%, 100%": { transform: "scaleY(0.8)" },
          "20%": { transform: "scaleY(0.4)" },
          "40%": { transform: "scaleY(1.3)" },
          "60%": { transform: "scaleY(0.2)" },
          "80%": { transform: "scaleY(1.1)" },
        },
        "wave-3": {
          "0%, 100%": { transform: "scaleY(0.5)" },
          "33%": { transform: "scaleY(1.4)" },
          "66%": { transform: "scaleY(0.3)" },
        },
        "wave-4": {
          "0%, 100%": { transform: "scaleY(0.2)" },
          "15%": { transform: "scaleY(0.9)" },
          "30%": { transform: "scaleY(0.6)" },
          "45%": { transform: "scaleY(1.5)" },
          "60%": { transform: "scaleY(0.4)" },
          "75%": { transform: "scaleY(1.1)" },
          "90%": { transform: "scaleY(0.7)" },
        },
        "wave-5": {
          "0%, 100%": { transform: "scaleY(0.7)" },
          "10%": { transform: "scaleY(1.3)" },
          "30%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1.6)" },
          "70%": { transform: "scaleY(0.3)" },
          "90%": { transform: "scaleY(1.0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.3" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave-1": "wave-1 0.6s infinite ease-in-out",
        "wave-2": "wave-2 0.4s infinite ease-in-out",
        "wave-3": "wave-3 0.8s infinite ease-in-out",
        "wave-4": "wave-4 0.3s infinite ease-in-out",
        "wave-5": "wave-5 0.5s infinite ease-in-out",
        "pulse-slow": "pulse-slow 3s infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "marquee": "marquee 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
