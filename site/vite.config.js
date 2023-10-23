import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from "path";
// import viteReadFilePlugin from "./plugin/file-scan.js";

export default defineConfig({
  resolve: {
    alias: {
      'tdesign-svelte': path.resolve(__dirname, '../src'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 17000,
    open: '/',
    https: false,
    fs: {
      allow: ['..'],
    },
  },
  build: {
    outDir: '../_site',
  },
  plugins: [svelte()],
})
