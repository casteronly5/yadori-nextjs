import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./app/**/*.{ts,tsx}",
          "./components/**/*.{ts,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            cream: "#fbf9f5",
                            "badge-cream": "#f5efe0",
                            ink: "#2a2826",
                            body: "#635f5b",
                            "light-text": "#efece8",
                            sage: "#7e9075",
                            "sage-blob": "#d4e0d1",
                            blush: "#efe2df",
                            "blush-blob": "#efe2df",
                            border: "#ebe6e0",
                            "deep-green": "#1e221f",
                            "deep-green-blob": "#2d3d2e",
                  },
                  fontFamily: {
                            serif: ["var(--font-cormorant)", "serif"],
                            sans: ["var(--font-gothic-a1)", "sans-serif"],
                  },
                  borderRadius: {
                            pill: "100px",
                  },
          },
    },
    plugins: [],
};

export default config;
