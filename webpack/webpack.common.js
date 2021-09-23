const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');

const isProduction = process.env.NODE_ENV === 'production';
console.log(`production ${isProduction}`);

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.outputPath,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)|(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(scss)|(sass)|(css)$/i,
        use: [
          // Оставил тут, чтобы не писать сложные правила мерджа
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: paths.htmlTemplate }),

    // Запускается только в режиме прода по умолчанию, оставил тут,
    // чтобы не разбрасывать конфигурацию MiniCssExtractPlugin по разным файлам
    new MiniCssExtractPlugin(),

    new webpack.DefinePlugin({}),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
