var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader']
            },
        ],
    },
};