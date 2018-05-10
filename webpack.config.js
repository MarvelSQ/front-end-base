const { NODE_ENV } = process.env;
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const styleLoader =
  NODE_ENV === 'production'
    ? [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader']
    : ['style-loader', 'css-loader', 'postcss-loader'];

const WebpackConfig = {
  mode: NODE_ENV,
  devServer: {
    contentBase: './dev',
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(less|css)$/,
        use: styleLoader,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      NODE_ENV,
    }),
    ...(NODE_ENV === 'development'
      ? [
        new webpack.DllReferencePlugin({
          context: path.join(__dirname, 'src'),
          manifest: require('./dll/vendor-manifest.json'),
        }),
      ]
      : []),
    ...(NODE_ENV === 'production' ? [new MiniCSSExtractPlugin('[name].css')] : []),
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = WebpackConfig;
