import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // sophisticated deep midnight — not pure black
        canvas: '#08080F',
        panel: '#10101A',
        elevated: '#16161F',
        raised: '#1C1C28',
        hairline: '#262633',
        hairline2: '#33334A',
        ink: { DEFAULT: '#F5F5F8', muted: '#9999AA', subtle: '#5F5F70' },
        dv: {
          ink: '#0A0A0F',
          blue: '#4F7CFF',
          royal: '#2950F2',
          glow: '#5B7BFF',
          violet: '#7C5CFF',
          cyan: '#22D3EE',
          mint: '#34D399',
          coral: '#FF7A59',
          amber: '#F59E0B',
          fuchsia: '#E879F9',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'display-1': ['clamp(3.5rem, 8.2vw, 7.5rem)', { lineHeight: '0.97', letterSpacing: '-0.045em', fontWeight: '600' }],
        'display-2': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'lead': ['clamp(1.125rem, 1.35vw, 1.25rem)', { lineHeight: '1.55' }],
      },
      backgroundImage: {
        // vibrant reactive mesh — pops on midnight
        'mesh-brand':
          'radial-gradient(45% 50% at 12% 18%, rgba(41, 80, 242, 0.55) 0%, rgba(41,80,242,0) 70%), radial-gradient(40% 45% at 88% 18%, rgba(124, 92, 255, 0.55) 0%, rgba(124,92,255,0) 70%), radial-gradient(45% 50% at 80% 80%, rgba(255, 122, 89, 0.45) 0%, rgba(255,122,89,0) 70%), radial-gradient(50% 50% at 18% 82%, rgba(52, 211, 153, 0.30) 0%, rgba(52,211,153,0) 70%), radial-gradient(40% 40% at 50% 50%, rgba(34, 211, 238, 0.22) 0%, rgba(34,211,238,0) 70%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card':
          '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px -24px rgba(0,0,0,0.6), 0 8px 24px -12px rgba(41,80,242,0.20)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.10) inset, 0 0 0 1px rgba(79,124,255,0.30), 0 30px 56px -26px rgba(0,0,0,0.7), 0 12px 32px -14px rgba(79,124,255,0.32)',
        'glow-blue': '0 0 80px 0 rgba(79,124,255,0.45)',
        'glow-violet': '0 0 80px 0 rgba(124,92,255,0.45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-down': 'bounceDown 1.8s ease-in-out infinite',
        'mesh-drift': 'meshDrift 22s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
