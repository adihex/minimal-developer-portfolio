/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// The canonical site is served from the root domain (https://adihex.github.io),
// so assets resolve from '/'. Deploy = build, then copy dist/* into the
// adihex.github.io repo root (preserving the /zettel app).
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
    globals: false,
  },
});
