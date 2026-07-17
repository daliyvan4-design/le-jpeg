import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff9ee",
        brick: "#af2a16",
        yellow: "#fbc904",
        orange: "#fd6b04",
        creamLight: "#fcedd5",
        blue: "#155dd5",
        pink: "#fca1d3",
        green: "#039c4b",
        black: "#000000",
        ink: "#141414",
      },
      fontFamily: {
        // Massive grotesque for titles & labels (caps)
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
        // Soft rounded geometric for gentle titles ("nos couleurs")
        soft: ["var(--font-poppins)", "system-ui", "sans-serif"],
        // Clean body sans
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        // Monospace for hex codes / data
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
        // Bricolage for the rotated side labels
        grotesque: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      keyframes: {
        logoIn: {
          "0%": {
            opacity: "0",
            filter: "drop-shadow(10px 0 #155dd5) drop-shadow(-10px 0 #af2a16)",
            clipPath: "inset(0 0 66% 0)",
            transform: "translateX(-8px)",
          },
          "30%": {
            opacity: "1",
            filter: "drop-shadow(-8px 0 #fd6b04) drop-shadow(8px 0 #039c4b)",
            clipPath: "inset(0 0 20% 0)",
            transform: "translateX(6px)",
          },
          "55%": {
            filter: "drop-shadow(6px 0 #155dd5) drop-shadow(-6px 0 #af2a16)",
            clipPath: "inset(0 0 40% 0)",
            transform: "translateX(-3px)",
          },
          "80%": {
            filter: "none",
            clipPath: "inset(0 0 0 0)",
            transform: "translateX(1px)",
          },
          "100%": {
            opacity: "1",
            filter: "none",
            clipPath: "inset(0 0 0 0)",
            transform: "none",
          },
        },
        glitchBurst: {
          "0%": {
            textShadow: "4px 0 #155dd5, -4px 0 #af2a16",
            transform: "translate(0,0)",
          },
          "25%": {
            textShadow: "-5px 0 #fd6b04, 5px 0 #039c4b",
            transform: "translate(3px,-1px)",
          },
          "50%": {
            textShadow: "4px 0 #af2a16, -4px 0 #155dd5",
            transform: "translate(-3px,1px)",
          },
          "72%": {
            textShadow: "-2px 0 #fbc904, 2px 0 #af2a16",
            transform: "translate(2px,0)",
          },
          "100%": { textShadow: "none", transform: "none" },
        },
        scrollcue: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        flick: {
          "0%,92%,100%": { opacity: "1" },
          "94%": { opacity: "0.35" },
          "96%": { opacity: "0.85" },
        },
      },
      animation: {
        logoIn: "logoIn 1.1s cubic-bezier(.2,.8,.2,1) both",
        glitchBurst: "glitchBurst .55s steps(2,end) 1",
        scrollcue: "scrollcue 1.6s ease-in-out infinite",
        flick: "flick 5s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
