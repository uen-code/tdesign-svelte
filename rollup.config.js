import multiInput from 'rollup-plugin-multi-input';
import styles from 'rollup-plugin-styles';
import copy from 'rollup-plugin-copy';
import deleteDirectory from './scripts/build-clean.js';

// components copy
const components = {
  input: ['src/**/style/index.js'],
  plugins: [
    multiInput(),
    styles({ mode: 'extract' }),
    copy({
      targets: [{ src: 'src/*', dest: 'components/' }],
      copyOnce: true,
    }),
    deleteDirectory({ directoryPath: 'components/_common' }),
  ],
  output: {
    dir: 'components/',
    assetFileNames: '[name].css',
  },
};

// root style
const rootStyle = {
  input: 'src/style/index.js',
  plugins: [styles({ mode: 'extract' })],
  output: {
    dir: 'components/style/',
    assetFileNames: '[name].css',
  },
};

export default [components, rootStyle];
