import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3333,
  },
  plugins: [
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        skeleton: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
      mode: 'development',
    }),
    react(),
  ],
  build: {
    minify: true,
  },
});
