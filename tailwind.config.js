module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        qora: "#0f0",
        black: {
          100: "#111",
          200: "#222",
          300: "#333",
        },
        headerBg:"#063246"
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        "ul":"15px",
      },
      screens:{
        "sm":"447px",
        "md":"768px",
        "lg":"990px",
        "xl":"1200px"
      }
    },
  },
  plugins: [],
};
