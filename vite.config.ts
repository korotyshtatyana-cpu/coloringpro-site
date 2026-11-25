import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
        'delete-account': path.resolve(__dirname, 'delete-account.html'),
      },
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }
          if (id.includes('@supabase')) {
            return 'supabase';
          }
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) {
            return 'react';
          }
          return 'vendor';
        },
      },
    },
  },
});
