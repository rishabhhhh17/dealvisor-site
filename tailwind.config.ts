import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // matched to the live ValenceOS tool
        canvas: '#F6F3EB',
        surface: '#FFFFFF',
        elevated: '#FAFAF7',
        panel: '#F0EDE4',
        raised: '#FFFFFF',
        hairline: '#E5E0D2',
        hairline2: '#D5CFC0',
        ink: { DEFAULT: '#0F172A', muted: '#475569', subtle: '#94A3B8' },
        dv: {
          ink: '#0F172A',
          navy: '#0F172A',
          blue: '#2563EB',
          royal: '#3B82F6',
          glow: '#60A5FA',
          violet: '#7C5CFF',
          indigo: '#4F46E5',
          mint: '#10B981',
          coral: '#FF7A59',
          amber: '#F59E0B',
        },
        // stage tints — very pale pastels from the tool
        stage: {
          origination: '#FFFBE6',
          pitching: '#FFF7D1',
          'pre-mandate': '#EDF4FF',
          mandate: '#DCEAFD',
          closed: '#E5F5EA',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'display-1': ['clamp(3.25rem, 7.4vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.045em', fontWeight: '600' }],
        'display-2': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'lead': ['clamp(1.125rem, 1.35vw, 1.25rem)', { lineHeight: '1.55' }],
      },
      backgroundImage: {
        // very soft warm wash — barely there, sets a calm mood
        'wash': 'radial-gradient(50% 50% at 18% 18%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0) 70%), radial-gradient(40% 45% at 84% 18%, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0) 70%), radial-gradient(45% 50% at 80% 80%, rgba(245,158,11,0.05) 0%, rgba(245,158,11,0) 70%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card':
          '0 1px 0 0 rgba(255,255,255,0.8) inset, 0 0 0 1px rgba(15,23,42,0.05), 0 1px 2px 0 rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.10)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.9) inset, 0 0 0 1px rgba(37,99,235,0.18), 0 6px 16px -8px rgba(15,23,42,0.10), 0 14px 28px -16px rgba(37,99,235,0.18)',
        'btn-primary':
          '0 1px 0 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(15,23,42,0.6), 0 1px 2px 0 rgba(15,23,42,0.10), 0 8px 18px -10px rgba(15,23,42,0.30)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'bounce-down': 'bounceDown 1.8s ease-in-out infinite',
        'wash-drift': 'washDrift 28s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        bounceDown: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
        washDrift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-2%, 1.5%, 0) scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
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
