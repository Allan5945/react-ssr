'use strict'
const path = require('path');


module.exports = {
  entry: {
    app: path.join(__dirname, '../client/main.js')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      }
    ],
  }
};
