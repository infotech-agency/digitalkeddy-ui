// import type { Config } from 'tailwindcss';
// import typography from "@tailwindcss/typography";
// const config: Config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
  
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       colors: {
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         brand: {
//           DEFAULT: '#0F1C4C',
//           light: '#1a2a5e',
//           dark: '#0a1432',
//           900: '#0F1C4C',
//           800: '#1a2a5e',
//         },
//         electric: {
//           DEFAULT: '#0C2FFC',
//           light: '#3b54fc',
//           dark: '#0820d6',
//         },
//         sky: {
//           DEFAULT: '#F4FAFD',
//           dark: '#e8f1f8',
//         },
//         ocean: {
//           DEFAULT: '#0868A0',
//           light: '#3a8ec0',
//           dark: '#065580',
//         },
//         leaf: {
//           DEFAULT: '#6BAB44',
//           light: '#89c463',
//           dark: '#518530',
//         },
//         chart: {
//           '1': 'hsl(var(--chart-1))',
//           '2': 'hsl(var(--chart-2))',
//           '3': 'hsl(var(--chart-3))',
//           '4': 'hsl(var(--chart-4))',
//           '5': 'hsl(var(--chart-5))',
//         },
//       },
//       fontFamily: {
//         sans: ['Poppins', 'sans-serif'],
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//         'float': {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-12px)' },
//         },
//         'float-slow': {
//           '0%, 100%': { transform: 'translateY(0) translateX(0)' },
//           '50%': { transform: 'translateY(-20px) translateX(10px)' },
//         },
//         'pulse-glow': {
//           '0%, 100%': { boxShadow: '0 0 20px rgba(12, 47, 252, 0.3)' },
//           '50%': { boxShadow: '0 0 40px rgba(12, 47, 252, 0.6)' },
//         },
//         'marquee': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-50%)' },
//         },
//         'shimmer': {
//           '100%': { transform: 'translateX(100%)' },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//         'float': 'float 6s ease-in-out infinite',
//         'float-slow': 'float-slow 8s ease-in-out infinite',
//         'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
//         'marquee': 'marquee 30s linear infinite',
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate'),typography],
// };
// export default config;

import type { Config } from 'tailwindcss';
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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

        // Black (pehle navy blue tha)
        brand: {
          DEFAULT: '#0A0A0A',
          light: '#1F1F1F',
          dark: '#000000',
          900: '#0A0A0A',
          800: '#1F1F1F',
        },
        // Red (pehle electric blue tha)
        electric: {
          DEFAULT: '#E10600',
          light: '#FF3B30',
          dark: '#B00500',
        },
        // White (pehle light sky blue tha)
        sky: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        },
        // Deep red (pehle ocean blue tha)
        ocean: {
          DEFAULT: '#B91C1C',
          light: '#DC2626',
          dark: '#991B1B',
        },
        // Neutral gray (pehle green tha)
        leaf: {
          DEFAULT: '#6B6B6B',
          light: '#8A8A8A',
          dark: '#4A4A4A',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(225, 6, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(225, 6, 0, 0.6)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'),typography],
};
export default config;