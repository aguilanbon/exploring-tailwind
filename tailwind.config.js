/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'fb-background' : '#F0F2F5',
      'fb-logo' : '#1877F2',
      'fb-text-gray': '#8A8D91',
      'fb-border-color': '#CCD0D5',
      'fb-border-color2': '#DADDE1',
      'fb-border-color3': '#DDDFE2',
      'fb-text-green': '#42B72A',
      'fb-hv-green': '#3a9b26',
      'fb-hv-blue': '#1867cf'
    },
      boxShadow: {
        'try': '0 0 10px #CCD0D5',
        'try2': '0 0 20px #CCD0D5',
        'inputShadow': '0 0 2px #1877F2',
      },
      fontSize: {
        'xxs': '.65rem'
      }
    },
  },
  plugins: [],
}
