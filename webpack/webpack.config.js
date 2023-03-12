const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),

    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname,'public')
        },
        port:3030,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                // Backward compatibility
                test:/\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|jpg)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Application',
            filename: 'index.html',
            template:'src/template.html'
        })
    ]
}