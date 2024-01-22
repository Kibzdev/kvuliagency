const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        display: [
          ["Mona Sans", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },

      colors: {
          "casal": "#1D626C",
          "casal-light":"#307780",
          "casal-dark":"#0A525E",
          "casal-dark-shade":"#0A525E",
          "turq":"#22D4C4",
          "turq-light":"#42E7D9",
          "turq-dark":"#07B4A3",
          "turq-dark-shade":"#069485",

          "celeste":"#CFD4C7",
          "celeste-light":"#E6EADE",
          "celeste-dark":"#ADB3A4",
          "celeste-dark-shade":"#8C9383",          

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
