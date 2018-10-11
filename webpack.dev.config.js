const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader',
      options: {
        presets: ['react', 'env'],
        plugins: [
          'react-hot-loader/babel',
          'transform-class-properties',
          'transform-object-rest-spread',
        ],
        cacheDirectory: true,
      },
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
