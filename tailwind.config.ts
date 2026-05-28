import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        canvas: '#0A0A0B',
        panel: '#111113',
        elevated: '#17171A',
        hairline: '#262629',
        fg: { DEFAULT: '#FAFAFA', muted: '#A1A1AA', subtle: '#71717A' },
        dv: {
          blue: '#4F7CFF',
          glow: '#60A5FA',
          violet: '#7C5CFF',
          ink: '#0A0A0B',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'display-1': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-2': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'lead': ['clamp(1.125rem, 1.4vw, 1.25rem)', { lineHeight: '1.55' }],
      },
      backgroundImage: {
        'mesh-hero': 'radial-gradient(60% 50% at 20% 20%, rgba(79, 124, 255, 0.18) 0%, rgba(79,124,255,0) 60%), radial-gradient(50% 60% at 80% 30%, rgba(124, 92, 255, 0.16) 0%, rgba(124,92,255,0) 65%), radial-gradient(60% 50% at 60% 80%, rgba(96, 165, 250, 0.10) 0%, rgba(96,165,250,0) 60%)',
        'glow-ring': 'radial-gradient(50% 50% at 50% 50%, rgba(79, 124, 255, 0.45) 0%, rgba(79, 124, 255, 0) 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 80px 0 rgba(79, 124, 255, 0.35)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px -16px rgba(0,0,0,0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-down': 'bounceDown 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        bounceDown: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
      },
    },
  },
  plugins: [],
};

export default config;
