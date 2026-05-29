import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Must match your GitHub repo name for GitHub Pages (marisolayta.github.io/Portfolio/)
  base: '/Portfolio/',
});
