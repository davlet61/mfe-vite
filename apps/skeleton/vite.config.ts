import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    federation({
      name: 'skeleton',
      filename: 'remoteEntry.js',
      exposes: {
        './Navbar': './src/components/Navbar.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
