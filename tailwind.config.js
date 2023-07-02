module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "bg-image": "url('~/assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};
