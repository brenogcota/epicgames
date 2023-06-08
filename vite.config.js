// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      data: `${path.resolve(__dirname, './src/data/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
});
