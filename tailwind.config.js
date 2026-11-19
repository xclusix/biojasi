/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F5EFE8',
          200: '#ECE3D7',
          300: '#DFD3C3',
          400: '#C8B8A4',
          500: '#B09D86',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          400: '#888580',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        botanical: {
          forest: '#2C5A3E',
          sage: '#5B7A68',
          moss: '#808953',
          clay: '#C2745F',
          amber: '#D4A343',
          rose: '#D28B99',
          lavender: '#8E7DAA',
          sky: '#6C86BD',
        },
        // Official Brand MIV Tokens
        pino: '#177333',
        tule: '#fbecdd',
        cantera: '#e2d8d2',
        brote: '#41af65',
        lago: '#6c86bd',
        arcilla: '#ec665b',
        cosmos: '#ed73aa',
        sol: '#fec82f',
      },
      fontFamily: {
        display: ['Federo', 'Georgia', 'serif'],
        serif: ['Federo', 'Georgia', 'serif'],
        editorial: ['Federo', 'Georgia', 'serif'],
        logo: ['Federo', 'sans-serif'],
        sub: ['Open Sans', 'Arial', 'sans-serif'],
        sans: ['Open Sans', 'Arial', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'antigravity-sm': '0 4px 20px -2px rgba(28, 25, 23, 0.04)',
        'antigravity': '0 12px 36px -4px rgba(28, 25, 23, 0.06), 0 4px 12px -2px rgba(28, 25, 23, 0.03)',
        'antigravity-lg': '0 24px 60px -8px rgba(28, 25, 23, 0.09), 0 8px 24px -4px rgba(28, 25, 23, 0.04)',
        'antigravity-float': '0 32px 70px -12px rgba(28, 25, 23, 0.12), 0 12px 30px -6px rgba(28, 25, 23, 0.05)',
      },
    },
  },
  plugins: [],
}
