/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blurIn: {
          '0%': { filter: 'blur(0)', transform: 'scale(1)' },
          '100%': { filter: 'blur(1px)', transform: 'scale(1.01)' },
        },
        blurOut: {
          '0%': { filter: 'blur(1px)', transform: 'scale(1.01)' },
          '100%': { filter: 'blur(0)', transform: 'scale(1)' },
        },
      },
      animation: {
        blurIn: 'blurIn 0.3s ease-in-out forwards',
        blurOut: 'blurOut 0.3s ease-in-out forwards',
      },
      clipPath: {
        'custom-slope': 'polygon(0 40%, 100% 20%, 100% 101%, 0 101%)',
        'custom-slope-sm': 'polygon(0 70%, 100% 30%, 100% 101%, 0 101%)',
        'custom-slope-lg': 'polygon(0 100%, 100% 50%, 100% 101%, 0 101%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-clip-path'),
  ],
}
