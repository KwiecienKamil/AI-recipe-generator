import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient1: "#9bee4e",
        gradient2: "#ffa37d",
        accent: "#CD9143",
      },
      fontFamily: {
        DynaPuff: "DynaPuff",
        Oswald: "Oswald",
      },
    },
  },
  plugins: [],
} satisfies Config;
