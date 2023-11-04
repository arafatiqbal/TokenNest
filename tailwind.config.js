/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ['cupcake', 'luxury', 'night'],
    darkTheme: ['night']
  },
  plugins: [require('daisyui')]
};
