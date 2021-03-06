import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    WindiCSS({
      scan: {
        fileExtensions: ['html', 'css', 'jsx', 'tsx', 'vue'],
      },
    }),
    Pages(),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
