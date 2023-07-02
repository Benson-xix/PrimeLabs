/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
          word: "#FFFFFF",
          start:"#6F4200",
          "start-dark": "#3C2400",
          Gold:" #FFE997",
          Black:"#111111",
          red:"#A31616",
          box:"#FBFBFB",
          ash:"#5C5C5C",
          ind:"#f3f1ea"
      },
      screens: {
        xxs:"375px",
        xs:"425px",
        sm:"768px",
        md:"1024px",
        lg:"1440px",
        xl:"1700px",
        xxl:"2560px",

        'max-xxs':{max:'375px'},
        'max-xs': {max:'425px'},
        'max-sm': {max:'768px'},
        'max-ms': {max:'1000px'},
        'max-md': {max:'1024px'},
        'max-lg': {max:'1440px'},
        'max-xl': {max:'2560px'},


      },
      backgroundImage: {
        hero: "url('./src/assets/Image/unsplash_SYTO3xs06fU.png')",
      },
      // keyframes: {
      //   slideInFromLeft: {
      //     '0%': {
      //       transform: 'translateX(-100%)',
      //     },
      //     '100%': {
      //       transform: 'translateX(0)',
      //     },
      //   },
      // },
      // animation: {
      //   'slide-in-left': 'slideInFromLeft 1s ease-in-out',
      // },
      keyframes: {
        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },

        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },

        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in-top': 'slideInFromTop 3s ease-in-out',
        'slide-in-left': 'slide-in-left 4s ease-out',
        'slide-in-right': 'slide-in-right 3s ease-out',
      },
    },
  },
  plugins: [],
}

