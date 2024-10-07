module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // asegúrate de que Tailwind escanee los archivos correctos
  ],
  theme: {
    extend: {
      colors: {
        'theme-light-bg': '#ffffff',
        'theme-light-text': '#000000',
        'theme-dark-bg': '#333333',
        'theme-dark-text': '#ffffff',
        'theme-light-link': '#007bff',
        'theme-dark-link': '#61dafb',
      },
    },
  },
  plugins: [],
};
