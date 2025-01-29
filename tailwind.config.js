// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',  // Ensure flowbite components are included
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],  // Include Flowbite plugin
};
