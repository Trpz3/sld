import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'js/lib',
      rollupTypes: false
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'js/lib/SLDViewer.js'),
      name: 'SLDViewer',
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.cjs`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) return 'style.css';
          return assetInfo.name;
        }
      }
    }
  },
  server: {
    open: '/test-module.html'
  }
});
