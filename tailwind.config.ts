import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // light, cool canvas
        canvas: '#FAFBFF',
        surface: '#FFFFFF',
        elevated: '#F5F7FF',
        hairline: '#E5E7F0',
        ink: { DEFAULT: '#0A0A0B', muted: '#52525B', subtle: '#A1A1AA' },
        dv: {
          blue: '#4F7CFF',
          sky: '#60A5FA',
          cyan: '#22D3EE',
          mint: '#34D399',
          violet: '#A78BFA',
          fuchsia: '#E879F9',
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
        'mesh-cool':
          'radial-gradient(40% 50% at 15% 20%, rgba(96, 165, 250, 0.55) 0%, rgba(96,165,250,0) 70%), radial-gradient(45% 45% at 85% 15%, rgba(167, 139, 250, 0.45) 0%, rgba(167,139,250,0) 70%), radial-gradient(50% 50% at 80% 80%, rgba(34, 211, 238, 0.35) 0%, rgba(34,211,238,0) 70%), radial-gradient(40% 40% at 20% 80%, rgba(52, 211, 153, 0.30) 0%, rgba(52,211,153,0) 70%)',
        'mesh-soft':
          'radial-gradient(40% 40% at 50% 50%, rgba(79, 124, 255, 0.18) 0%, rgba(79,124,255,0) 70%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card':
          '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 0 0 1px rgba(15,23,42,0.04), 0 12px 32px -16px rgba(79,124,255,0.18), 0 4px 16px -8px rgba(15,23,42,0.08)',
        'glow-blue': '0 0 60px 0 rgba(79,124,255,0.35)',
        'glow-violet': '0 0 60px 0 rgba(167,139,250,0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-down': 'bounceDown 1.8s ease-in-out infinite',
        'mesh-drift': 'meshDrift 18s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        bounceDown: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
        meshDrift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(-4%, 3%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(5%, -2%, 0) scale(0.96)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
