import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#fc3fd9',
        aqua: '#38fdfd',
        navyBlack: '#0f172a',
        pureWhite: '#ffffff',
        slateLight: '#f1f5f9',
        blueGrey: '#1e293b',
        darkPurple: '#3f3d56',
        pinkGlow: 'rgba(252, 63, 217, 0.65)',
        aquaGlow: 'rgba(56, 253, 253, 0.65)',
        purpleGlow: 'rgba(127, 63, 255, 0.45)',
      },
      fontFamily: {
        heading: ['Sora', 'Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.75rem',
        h4: '1.5rem',
        body: '1rem',
        caption: '0.875rem',
      },
      borderRadius: {
        xs: '6px',
        sm: '10px',
        md: '16px',
        lg: '22px',
        xl: '32px',
        pill: '999px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.45)',
        'deep': '0 8px 40px rgba(0,0,0,0.6)',
        'glowPink': '0 0 25px rgba(252,63,217,0.55)',
        'glowAqua': '0 0 25px rgba(56,253,253,0.55)',
        'glow-pink-strong': '0 0 40px rgba(252,63,217,0.8)',
        'glow-aqua-strong': '0 0 40px rgba(56,253,253,0.8)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(145deg, rgba(16,30,47,0.95) 0%, rgba(26,22,56,0.9) 50%, rgba(63,61,86,0.85) 100%)',
        'button-primary': 'linear-gradient(135deg, #38fdfd 0%, #fc3fd9 100%)',
        'button-secondary': 'linear-gradient(135deg, rgba(56,253,253,0.4) 0%, rgba(252,63,217,0.35) 100%)',
        'surface-glow': 'radial-gradient(circle at top, rgba(252,63,217,0.35), rgba(0,0,0,0))',
        'header-bg': 'linear-gradient(180deg, #0f172a 0%, rgba(15,23,42,0.8) 100%)',
      },
      backdropBlur: {
        surface: '18px',
        frosted: '26px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'floating-orbs': 'floating-orbs 20s ease-in-out infinite',
        'neon-outline': 'neon-outline 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 25px rgba(56,253,253,0.55)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(56,253,253,0.8)' },
        },
        'floating-orbs': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'neon-outline': {
          '0%, 100%': { borderColor: 'rgba(56,253,253,0.3)', boxShadow: '0 0 10px rgba(56,253,253,0.2)' },
          '50%': { borderColor: 'rgba(252,63,217,0.5)', boxShadow: '0 0 20px rgba(252,63,217,0.4)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.bg-glass': {
          'background': 'rgba(16, 30, 47, 0.7)',
          'backdrop-filter': 'blur(18px)',
          '-webkit-backdrop-filter': 'blur(18px)',
        },
        '.hover-glow-aqua': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'box-shadow': '0 0 25px rgba(56, 253, 253, 0.55)',
          },
        },
        '.hover-glow-pink': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'box-shadow': '0 0 25px rgba(252, 63, 217, 0.55)',
          },
        },
        '.surface-blur': {
          'backdrop-filter': 'blur(18px)',
          '-webkit-backdrop-filter': 'blur(18px)',
        },
        '.neon-underline': {
          'position': 'relative',
          '&::after': {
            'content': '""',
            'position': 'absolute',
            'bottom': '-4px',
            'left': '0',
            'width': '100%',
            'height': '2px',
            'background': 'linear-gradient(90deg, #38fdfd, #fc3fd9)',
            'box-shadow': '0 0 10px rgba(56, 253, 253, 0.5)',
          },
        },
      });
    },
  ],
};

export default config;
