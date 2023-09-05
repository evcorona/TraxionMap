/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D0DF00',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
export default config
