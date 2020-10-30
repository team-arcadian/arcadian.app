module.exports = {
  purge: ['./src/**/*.ejs', './src/**/*.md'],
  theme: {
    extend: {
      height: {
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
