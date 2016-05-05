// var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    maze: './maze/source/index.js',
  },
  output: {
    path: __dirname,
    filename: './[name]/static/[name]/js/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./[name]/static/[name]/css/index.css', {
      allChunks: true,
    }),
  ],
};
