import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
      json: '/src/json',
      contexts: '/src/contexts',
    },
  },
});
