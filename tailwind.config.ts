// tailwind.config.ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import animatePlugin from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        pinned:
          'linear-gradient(119deg, rgb(143 152 242) 0%, rgb(95 167 225) 30%, rgb(206 133 247) 47%, rgb(235 147 186) 69%, rgb(190 188 251) 80%)',
        'pinned-dark':
          'linear-gradient(119deg, rgb(75 87 196) 0%, rgb(31 133 206) 30%, rgb(125 20 166) 42%, rgb(134 15 60) 63%, rgb(18 8 45) 73%)',
        'nav-link-indicator':
          'radial-gradient(44.6% 825% at 50% 50%, rgb(255 133 133) 0%, rgb(255 72 109 / 0) 100%)',
        'nav-link-indicator-dark':
          'radial-gradient(44.6% 825% at 50% 50%, rgb(255 28 28) 0%, rgb(255 72 109 / 0) 100%)',
        'email-button':
          'linear-gradient(180deg, rgb(210 10 30) 5%, rgb(239 90 90) 100%)',
      },
      boxShadow: {
        'feature-card': '0 -1px 3px 0 rgb(0 0 0 / 0.05)',
        'feature-card-dark':
          '0 0 0 1px rgb(255 255 255 / 0.06), 0 -1px rgb(255 255 255 / 0.1)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
      })
    }),
    animatePlugin,
  ],
}

export default config