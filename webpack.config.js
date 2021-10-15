var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context:__dirname,
    mode: 'development',
    entry:{
        index: './src/index.js'
    },
    output:{
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'index.bundle.css',
        })
    ],
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
        ],
    },
};