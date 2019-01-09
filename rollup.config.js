import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.ts',
  output: {
    file: `dist/index.js`,
    format: 'iife',
    name: 'test'
  },
  plugins: [
    resolve({
      extensions: [ '.js', '.json', '.ts' ]
    }),
    typescript(),
    serve({
      contentBase: ['dist', 'demo'],
      port: 3333,
      open: true
    })
  ]
};
