import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif"
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            'p': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure': {
              marginTop: '0',
              marginBottom: '0',
            },
            '> *:first-child': {
              marginTop: '0',
            },
            '> *:last-child': {
              marginBottom: '0',
            },
          },
        },
      },
      fontSize: {
        // Pääotsikot
        'h1': ['48px', {
          lineHeight: '1.1',
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }],
        'h1-mobile': ['36px', {
          lineHeight: '1.2',
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }],

        // Väliotsikot
        'h2': ['40px', {
          lineHeight: '1.2',
          fontWeight: '600',
          letterSpacing: '-0.01em',
        }],
        'h3': ['32px', {
          lineHeight: '1.3',
          fontWeight: '600',
        }],

        // Leipäteksti ja korostukset
        'body': ['18px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
        'body-small': ['16px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
        'emphasis': ['24px', {
          lineHeight: '1.4',
          fontWeight: '500',
        }],

        // Metatiedot ja pienemmät tekstit
        'meta': ['13px', {
          lineHeight: '1.4',
          fontWeight: '400',
        }],
        'caption': ['11px', {
          lineHeight: '1.4',
          fontWeight: '400',
          letterSpacing: '0.02em',
        }],
      },
    },
  },
  plugins: [
    typography(),
  ],
};
