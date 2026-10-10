import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at sheilamumbi.github.io/sheillamacharia.github.io/
export default defineConfig({
  base: './',
  plugins: [react()],
});
