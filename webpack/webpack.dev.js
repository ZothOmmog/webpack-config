module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js)|(jsx)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
  },
};
