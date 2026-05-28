import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // warm cream canvas — distinctive, not generic white
        canvas: '#F8F4EC',
        surface: '#FDFAF2',
        elevated: '#FFFFFF',
        hairline: '#E8E0CE',
        ink: { DEFAULT: '#101012', muted: '#5C5B62', subtle: '#9C998F' },
        dv: {
          ink: '#101012',
          blue: '#2950F2', // electric royal — primary accent
          glow: '#5B7BFF',
          violet: '#7C5CFF',
          cyan: '#22D3EE',
          mint: '#34D399',
          coral: '#FF7A59',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'display-1': ['clamp(3.25rem, 7.5vw, 6.5rem)', { lineHeight: '0.97', letterSpacing: '-0.045em', fontWeight: '600' }],
        'display-2': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'lead': ['clamp(1.125rem, 1.35vw, 1.25rem)', { lineHeight: '1.55' }],
      },
      backgroundImage: {
        // playful warm+cool mesh: coral / royal blue / violet / mint, over cream canvas
        'mesh-brand':
          'radial-gradient(50% 50% at 12% 18%, rgba(41, 80, 242, 0.28) 0%, rgba(41,80,242,0) 70%), radial-gradient(45% 45% at 88% 18%, rgba(124, 92, 255, 0.30) 0%, rgba(124,92,255,0) 70%), radial-gradient(45% 50% at 80% 78%, rgba(255, 122, 89, 0.26) 0%, rgba(255,122,89,0) 70%), radial-gradient(50% 50% at 18% 82%, rgba(52, 211, 153, 0.20) 0%, rgba(52,211,153,0) 70%), radial-gradient(40% 40% at 50% 50%, rgba(34, 211, 238, 0.14) 0%, rgba(34,211,238,0) 70%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card':
          '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 0 0 1px rgba(16,16,18,0.04), 0 18px 36px -20px rgba(16,16,18,0.20), 0 4px 12px -8px rgba(16,16,18,0.08)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 0 0 1px rgba(41,80,242,0.10), 0 24px 48px -22px rgba(16,16,18,0.25), 0 6px 18px -10px rgba(41,80,242,0.12)',
        'btn-primary':
          '0 1px 0 0 rgba(255,255,255,0.30) inset, 0 0 0 1px rgba(16,16,18,0.6), 0 8px 20px -8px rgba(16,16,18,0.30)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-down': 'bounceDown 1.8s ease-in-out infinite',
        'mesh-drift': 'meshDrift 22s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        bounceDown: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
        meshDrift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(-3%, 2%, 0) scale(1.06)' },
          '66%': { transform: 'translate3d(4%, -1.5%, 0) scale(0.98)' },
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
