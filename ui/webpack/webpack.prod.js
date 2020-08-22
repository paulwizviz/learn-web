const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base')

baseConfig.plugins[0].minify = true

const productionConfig = {
  mode: 'production'
}

module.exports = merge(baseConfig, productionConfig);
