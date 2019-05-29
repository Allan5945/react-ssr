'use strict';
const path = require('path');
const rootPath = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');


module.exports = {

    mode: "development",

    entry: [
        "@babel/polyfill",
        path.join(rootPath, 'src/main.js')
    ],

    output: {
        path: path.join(rootPath, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'happypack/loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]-[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ]
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]-[hash:base64:5]',
                        },
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            },
            {
                test: /\.(less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]-[hash:base64:5]',
                        },
                    },
                    {
                        loader: "less-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(rootPath, 'src/index.html')}),
        new HappyPack({
            loaders: ['babel-loader']
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.less', '.scss', '.css'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '$src': path.join(rootPath, 'src/')
        }
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
