import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    base: true,
    styled: true,
    themeRoot: "dark",
    themes: [
      "dark"
    ]
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
export default config
