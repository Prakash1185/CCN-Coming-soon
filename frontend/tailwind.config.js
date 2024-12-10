/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "Poppins"
      },
      colors: {
        "Primary": "",
        "LogoBlue": "#041529",
        "DBlue": "#0d1117",
        "NBlue": "#0c0f14",
      },
      boxShadow: {
        'glow': '0 0 10px rgba(29, 78, 216, 0.8), 0 0 20px rgba(29, 78, 216, 0.6), 0 0 30px rgba(29, 78, 216, 0.4)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}