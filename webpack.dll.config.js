const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  name: 'vendor',
  entry: {
    vendor: [path.join(__dirname, 'dll', 'vendor.js')],
  },
  output: {
    path: path.join(__dirname, 'dev/dll'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      /**
       * path
       * define manifest files's location
       */
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。
       */
      name: '[name]',
      context: path.resolve(__dirname, 'dll'),
    }),
  ],
};
