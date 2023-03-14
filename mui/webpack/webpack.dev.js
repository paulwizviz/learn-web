const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(commonConfig.output.path, 'public')
      },
      host: '0.0.0.0',
      port: 3030,
      open: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        },
      ],
    },
    plugins: [
      new ErrorOverlayPlugin()
    ]
}

module.exports = merge(commonConfig, devConfig)
