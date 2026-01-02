/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': 'hsl(233, 26%, 24%)',
        'primary-bright-green': 'hsl(136, 64%, 51%)',
        'primary-vivid-cyan': 'hsl(192, 69%, 51%)',
        'neutral-gray': 'hsl(233, 8%, 45%)',
        'neutral-light-bg': 'hsl(220, 14%, 94%)',
        'neutral-off-white': 'hsl(0, 0%, 97%)',
        'neutral-white': 'hsl(0, 100%, 100%)',
      },
      screens: {
      'max-lg': {'max': '1024px'},
      'max-md': {'max': '768px'},
    },
      backgroundImage: {
        'hamburger': "url('images/icon-hamburger.svg')",
        'close': "url('images/icon-close.svg')",
    }
    },
  },
  plugins: [],
}
