const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: './app.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './backend/public'),
        filename: 'scripts.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.svg$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: false,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'mainstyles.css'
        })
    ]
}