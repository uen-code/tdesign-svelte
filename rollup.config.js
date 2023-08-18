import multiInput from "rollup-plugin-multi-input";
import styles from 'rollup-plugin-styles'
import copy from "rollup-plugin-copy";

export default {
  // use glob in the input
  input: ['src/**/style/index.js'],
  plugins: [
    multiInput(),
    styles({mode: 'extract'}),
    copy({
      targets: [{ src: 'src/*', dest: 'components/' }],
      copyOnce: true
    })
  ],
  output: {
    dir: 'components/',
    assetFileNames: '[name].css',
  },
};