export const demoList = [
  {
    id: '安装',
    title: '安装',
    href: '#安装',
    child: [
      {
        id: '使用 npm 安装',
        title: '使用 npm 安装',
        href: '#使用 npm 安装',
        desc: ['推荐使用 npm 方式进行开发'],
        language: 'shell',
        code: '<span class="token function">npm</span> i tdesign-svelte',
      },
    ],
  },
  {
    id: '使用',
    title: '使用',
    href: '#使用',
    desc: 'TDesign 推荐使用按需引入，具体使用方式如下',
    child: [
      {
        id: '按需引入使用',
        title: '按需引入使用',
        href: '#按需引入使用',
        desc: [
          '产物大小有严格的要求，通过 按需引入具体组件 的方式来使用。',
          '借助 Webpack 或 Rollup 等支持 tree-shaking 特性的构建工具，可以达到按需引入的使用效果。',
        ],
        language: 'html',
        code: `<span class="token keyword">import </span><span class="token punctuation">{</span> TButton <span class="token punctuation">} </span><span class="token keyword">from </span><span class="token string">'tdesign-svelte'</span>

<span><</span>TButton />`,
      },
    ],
  },
  {
    id: '源码',
    title: '源码',
    href: '#源码',
    child: [
      {
        id: 'github 地址',
        title: 'github 地址',
        href: '#github 地址',
        url: 'https://github.com/hzx000822/tdesign-svelte',
      },
    ],
  },
  {
    id: '浏览器兼容型',
    title: '浏览器兼容型',
    href: '#浏览器兼容型',
  },
];
