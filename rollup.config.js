import run from '@rollup/plugin-run'
import svelte from 'rollup-plugin-svelte'

export default {
  input: 'bin/prerender.js',
  output: {
    format: 'cjs',
    file: 'bin/dist/prerender.js',
  },
  plugins: [
    svelte({
      dev: false,
      generate: 'ssr',
      css: function (css) {
        css.write('public/_dist_/main.css')
      },
    }),
    run(),
  ],
}
