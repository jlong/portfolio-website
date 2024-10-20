/** @type {import('tailwindcss').Config} */

export const hues = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',
  black: '#131418'
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    }
  ],

  theme: {
    colors: {
      ...hues,

      default: hues['black'] + 'cc',
      bold: hues['black'],
      subtle: hues['black'] + 'a5',

      link: '#591cde',
      'link-hover': '#591cde',
      'link-visited': '#591cde',

      'fancy-underline': '#e25d7d',

      'depth-0': hues['white'],
      'depth-1': 'rgba(19,20,24,.05)',
      'depth-2': 'rgba(19,20,24,.10)',
      'depth-3': 'rgba(19,20,24,.15)',
      'depth-4': 'rgba(19,20,24,.20)',
      'depth-5': 'rgba(19,20,24,.25)',

      border: 'rgba(19,20,24,.15)',

      icon: hues['black'],

      button: {
        primary: {
          text: hues['white'],
          background: '#7147c9',
          hover: {
            text: hues['white'],
            background: '#313a92'
          }
        },

        secondary: {
          text: hues['black'] + 'cc',
          background: 'rgba(19,20,24,.1)',
          hover: {
            text: hues['black'],
            background: 'rgba(19,20,24,.15)'
          }
        }
      },

      dark: {
        default: hues['white'] + 'cc',
        bold: hues['white'],
        subtle: hues['white'] + 'a5',

        link: '#b879ff',
        'link-hover': '#b879ff',
        'link-visited': '#b879ff',

        'fancy-underline': '#e25d7d',

        'depth-0': '#110718',
        'depth-1': 'rgba(255,255,255,.10)',
        'depth-2': 'rgba(255,255,255,.15)',
        'depth-3': 'rgba(255,255,255,.20)',
        'depth-4': 'rgba(255,255,255,.25)',
        'depth-5': 'rgba(255,255,255,.30)',

        border: 'rgba(255,255,255,.3)',

        icon: hues['white'],

        button: {
          primary: {
            text: hues['white'],
            background: '#7147c9',
            hover: {
              text: hues['white'],
              background: '#313a92'
            }
          },

          secondary: {
            text: hues['white'],
            background: 'rgba(255,255,255,.1)',
            hover: {
              text: hues['white'],
              background: 'rgba(255,255,255,.2)'
            }
          }
        }
      }
    },

    fontFamily: {
      display: ['var(--font-manrope)', 'sans-serif'],
      body: ['var(--font-geist-sans)', 'sans-serif']
    },

    spacing: {
      0: '0',
      0.25: '2px',
      0.5: '4px',
      1: '8px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px'
    },

    opacity: {
      5: 0.05,
      10: 0.1,
      15: 0.15,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      35: 0.35,
      40: 0.4,
      45: 0.45,
      50: 0.5,
      55: 0.55,
      60: 0.6,
      65: 0.65,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      85: 0.85,
      90: 0.9,
      95: 0.95,
      100: 1
    },

    gridTemplateColumns: {
      '3-1': '40fr 13fr',
      '1-3': '13fr 40fr'
    },

    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.normal'),
            '--tw-prose-headings': theme('colors.bold'),
            '--tw-prose-lead': theme('colors.normal'),
            '--tw-prose-links': theme('colors.link'),
            '--tw-prose-bold': theme('colors.bold'),
            '--tw-prose-counters': theme('colors.default'),
            '--tw-prose-bullets': theme('colors.brand'),
            '--tw-prose-hr': theme('colors[dark-rule]'),
            '--tw-prose-quotes': theme('colors.brand'),
            '--tw-prose-quote-borders': theme('colors.brand'),
            '--tw-prose-captions': theme('colors.normal'),
            '--tw-prose-code': theme('colors.normal'),
            '--tw-prose-pre-code': theme('colors.normal'),
            a: {
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'none'
              }
            }
          }
        }
      })
    }
  },

  plugins: [require('@tailwindcss/typography')]
}
