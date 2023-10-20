const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {  
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        title2: ["Lobster Two", "cursive"],
      },
    }
  },
  plugins: [],
});
