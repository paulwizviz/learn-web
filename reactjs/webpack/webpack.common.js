const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '..', 'public');
const SRC_DIR = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    main: [`@babel/polyfill`,`${SRC_DIR}/index.js`],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    clean: true,
    filename: 'bundle[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      minify: false,
      filename: 'index.html',
      template: path.resolve(SRC_DIR,'index.html')
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(SRC_DIR, 'assets'), to: path.resolve(BUILD_DIR,'assets') },
      ]
    }),
  ],
}
