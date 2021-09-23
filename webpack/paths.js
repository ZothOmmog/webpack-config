const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  outputPath: path.resolve(__dirname, '../build'),
  htmlTemplate: path.resolve(__dirname, '../public/index.html'),
};
