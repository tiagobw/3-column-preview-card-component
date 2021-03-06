module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards-horizontal': 'repeat(3, 20rem)',
      },
    },
    colors: {
      'bright-orange': '#e38826',
      'dark-cyan': '#006970',
      'very-dark-cyan': '#004241',
      white: '#ffffff',
      'very-light-gray': '#f2f2f2',
    },
  },
  plugins: [],
};
