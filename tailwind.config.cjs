/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind is used only for its preflight reset; the design system lives in
  // src/styles/app.css as hand-authored CSS (see DESIGN.md).
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
