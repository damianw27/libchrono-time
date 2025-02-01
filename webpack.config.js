const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'libchrono-time',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [new TSConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ESLintPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },
};
