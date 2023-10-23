import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

const base = 'layout-furniture';

export default defineConfig({
  //# Deployment
  base: `/${base}/`, // repo name

  //# Plugins
  plugins: [
    injectHTML({
      debug: {
        logPath: true, //% Debugging
      },
    }), // Optional options
  ],

  css: {
    postcss: {
      plugins: [autoprefixer()], // Optional options
    },
  },

  //# Production
  build: {
    rollupOptions: {
      input: {
        // Production paths
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, `404/index.html`),
      },
    },
  },

  //# Local server
  server: {
    port: 3000,
  },
  //# Preview server
  preview: {
    port: 8080,
  },
});
