const path = require('path');

module.exports = {
  // default entry
  // entry: './src/index.js',
  // default output
  // output: './dist',
  // output html file based html-webpack-plugin
  htmls: [
    {
      template: path.resolve(__dirname, './index.js'),
    },
  ],
};
