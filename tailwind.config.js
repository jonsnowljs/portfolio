/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0d1117',
        'surface-2': '#161b22',
        primary: '#7c3aed',
        'primary-light': '#a855f7',
        'primary-dark': '#6d28d9',
        secondary: '#22d3ee',
        'secondary-dark': '#0891b2',
        accent: '#f43f5e',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'text-muted': '#475569',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-default': 'rgba(255,255,255,0.10)',
        'border-strong': 'rgba(255,255,255,0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 25s linear infinite',
        'bounce-subtle': 'bouncSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.6), 0 0 80px rgba(124,58,237,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bouncSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh': `
          radial-gradient(at 27% 37%, hsla(215,98%,61%,0.08) 0px, transparent 50%),
          radial-gradient(at 97% 21%, hsla(280,100%,74%,0.12) 0px, transparent 50%),
          radial-gradient(at 52% 99%, hsla(354,98%,61%,0.07) 0px, transparent 50%),
          radial-gradient(at 10% 29%, hsla(256,96%,67%,0.1) 0px, transparent 50%),
          radial-gradient(at 97% 96%, hsla(38,60%,74%,0.05) 0px, transparent 50%),
          radial-gradient(at 33% 50%, hsla(222,67%,73%,0.07) 0px, transparent 50%)
        `,
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
