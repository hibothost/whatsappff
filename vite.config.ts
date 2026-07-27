import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove the subdirectory base path so it deploys cleanly to the root domain on Vercel
  base: '/', 
  resolve: {
    alias: {
      // Connects the '@' alias to your root directory to match tsconfig.json
      '@': path.resolve(__dirname, './'),
    },
  },
});
