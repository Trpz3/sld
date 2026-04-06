import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'js/lib/SLDViewer.js'),
      name: 'SLDViewer',
      fileName: (format) => `sld-viewer.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['jquery'],
      output: {
        globals: {
          jquery: '$'
        }
      }
    }
  },
  server: {
    open: '/test-module.html'
  }
});
