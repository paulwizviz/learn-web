const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

const productionConfig = {
  mode: 'production',
  devtool: 'source-map',
}

module.exports = merge(commonConfig, productionConfig);
