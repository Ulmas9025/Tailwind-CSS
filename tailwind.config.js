/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    screens: {
      lg: {'max':'1199.99px'},
      md: {'max':'991.99px'},
      sm: {'max':'768.99px'},
      xs: {'max':'479.99px'},
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif']
      },
      colors: {
        blueViolet: '#5827B5',
        lightgray: '#666768'
      },
      backgroundImage: {
        heroGradient: 'linear-gradient(94.59deg, #4923B4 2.39%, #E878CF 97.66% )',
        oboy: "url('/src/img/img-list-1/oboy.png')", // Correct path for background image
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        fadeIn: '.1s ease-in-out',
      }
    },
  },
  plugins: [],
}
