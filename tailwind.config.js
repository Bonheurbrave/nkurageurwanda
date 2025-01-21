module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: '#1f5a39', // Custom green shade
        },
        orange: {
          300: '#ff8a3d', // Custom orange-300 shade
        },
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};
