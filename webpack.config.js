var path = require('path');
var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  entry: './client/index.js', // путь к вашему главному js файлу

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
    {
      // check source files, not modified by other loaders (like babel-loader)
      enforce: 'pre',
      test: /\.js$/,
      exclude: [/node_modules/, /build/],
      loader: 'eslint-loader',
    },
    { /* Как обрабатывать каждый загружаемый файл */
      test: /\.js$/, // запустим загрузчик во всех файлах .js
      exclude: /node_modules/, // проигнорируем все файлы в папке node_modules
      use: {
        loader:'babel-loader',
        options: { presets: ['env', 'react', 'stage-3'] },
      }
    }
    ] // rules
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin()
  ]
};