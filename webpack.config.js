const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcFolder = path.join(__dirname, '/client/src/');

module.exports = {
  entry: {
    main: [path.join(srcFolder, '/js/index.jsx')],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcFolder, '/index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
