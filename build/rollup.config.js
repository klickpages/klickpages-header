import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'KlickpagesHeader',
    exports: 'named',
    globals: {
      vue: 'Vue',
      'vue-i18n': 'VueI18n',
      'js-cookie': 'cookie',
      axios: 'axios',
    },
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
    uglify(),
  ],
  external: ['vue', 'vue-i18n', 'js-cookie', 'axios'],
};
