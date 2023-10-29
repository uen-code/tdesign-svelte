import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from "path";
// import viteReadFilePlugin from "./plugin/file-scan.js";
import svelteMd from "vite-plugin-svelte-md";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItTocDoneRight from "markdown-it-toc-done-right"


export default defineConfig({
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, '../src/_common'),
      'tdesign-svelte': path.resolve(__dirname, '../src'),
      'tdesign-svelte-icon': path.resolve(__dirname, '../src/icon'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 17000,
    open: '/svelte/overview',
    https: false,
    fs: {
      allow: ['..'],
    },
  },
  build: {
    outDir: '../_site',
  },
  plugins: [
    svelteMd({
      wrapperClasses: "",
      markdownItUses: [
        (md) => {
          MarkdownItAnchor(md, {
            permalink: true, // 启用锚点链接
            permalinkSymbol: '#', // 自定义锚点链接的符号
            level:[2, 3],
            slugify: function (s) {
              return decodeURIComponent(String(s).trim().toLowerCase());
            }
          });
        },
        (md) => {
          MarkdownItTocDoneRight(md, {
            containerClass: 'tdesign-toc_container',
            listClass: "tdesign-toc_list",
            itemClass: "tdesign-toc_list_item",
            linkClass: "tdesign-toc_list_item_a",
            level: [2, 3],
            slugify: function (s) {
              return decodeURIComponent(String(s).trim().toLowerCase());
            }
          })
        },
      ],
    }),
    svelte({extensions: [".svelte", ".md"]})],
})