/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'left-rigth': {
          '0%': {
            transform: 'translateX(-60px)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '100%'
          }
        },
        'rigth-left': {
          '0%': {
            transform: 'translateX(60px)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '100%'
          }
        },
        'fade-in1': {
          '0%': {    
            opacity: '0%'
          },
          '50%': {
            opacity: '0%'
          },
          '100%': { 
            opacity: '100%'
          }
        },
        'fade-in2': {
          '0%': {    
            opacity: '0%'
          },
          '50%': {
            opacity: '0%'
          },
          '100%': { 
            opacity: '100%'
          }
        },
        'fade-in3': {
          '0%': {    
            opacity: '0%'
          },
          '50%': {
            opacity: '0%'
          },
          '100%': { 
            opacity: '100%'
          }
        },
        
      },
      animation: {
        'left-rigth': 'left-rigth 1.5s',
        'rigth-left': 'rigth-left 1.5s',
        'fade-in1': 'fade-in1 1.4s',
        'fade-in2': 'fade-in2 2.2s',
        'fade-in3': 'fade-in3 .7s',
      }
    },
    
  },
  plugins: [],
}

