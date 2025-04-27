import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const environment = process.env.NODE_ENV || 'development';

export default {
  input: 'index.js',
  output: [
    {
      dir: 'dist',  
      format: 'umd',
      name: 'mem-lite', 
      sourcemap: true,
      entryFileNames: environment === 'production' ? 'mem-lite.min.js': 'mem-lite.js',
      plugins: environment === 'production' ? [terser()] : [],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
  ],
};
