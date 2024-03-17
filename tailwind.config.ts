import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#2B0131',
        'lighter-purple': '#572A4E', // Assuming a complementary or contrasting color
      },
      gradientColorStops: {
        'custom-start': '#2B0131',
        'custom-end': '#572A4E', // Adjust as needed for your design
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Add a custom linear gradient using the new colors
        "gradient-custom": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
