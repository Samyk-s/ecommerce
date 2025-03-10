// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // Include Flowbite components
  ],
  darkMode: 'class', // Enables dark mode via a class
  theme: {
    extend: {
      // You can add custom dark mode colors, spacing, or other theme configurations here
    },
  },
  plugins: [flowbitePlugin], // Include Flowbite plugin
};
