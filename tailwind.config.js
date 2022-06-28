/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': '#FF7E1B',
        'pale-orange': '#ffede0',
        'very-vark-blue': '#1d2025',
        'dark-grayish-blue': '#68707d',
        'grayish-blue': '#b6bcc8',
        'light-grayish-blue': '#e9ecef',
      },
    },
  },
  plugins: [],
};
