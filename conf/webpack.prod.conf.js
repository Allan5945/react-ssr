'use strict';
const fs = require('fs');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const rootPath = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');


module.exports = [
    {
        stats: 'errors-only',

        mode: "production",

        devtool: 'none',

        entry: {
            login: [
                '@babel/polyfill',
                path.join(rootPath, 'client/src/page/login/main.js')
            ],
            index:  [
                '@babel/polyfill',
                path.join(rootPath, 'client/src/page/index/main.js')
            ]
        },

        output: {
            path: path.join(rootPath, 'dist'),
            filename: 'js/[chunkhash:8].[name].js',
            chunkFilename: 'js/chunk.[chunkhash:8].js',
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'happypack/loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
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
                        MiniCssExtractPlugin.loader,
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
            new HtmlWebpackPlugin({
                chunks: ['index'],
                root:"<%- root %>",
                template: path.join(rootPath, '/client/src/index.html'),
                filename: path.join(rootPath, '/dist/views/index.html'),
                chunksSortMode: 'none'
            }),
            new HtmlWebpackPlugin({
                chunks: ['login'],
                root:"<%- root %>",
                template: path.join(rootPath, '/client/src/index.html'),
                filename: path.join(rootPath, '/dist/views/login.html'),
                chunksSortMode: 'none'
            }),
            new HappyPack({
                loaders: ['babel-loader']
            }),
            new ProgressBarPlugin({summary: true}),
            new MiniCssExtractPlugin({
                filename: 'css/[contenthash:8].[name].css'
            }),
        ],
        resolve: {
            extensions: ['.js', '.vue', '.less', '.scss', '.css',  '.jsx'],
            alias: {
                '$src': path.join(rootPath, '/client/src/')
            }
        },

    },
    {
        stats: 'errors-only',
        mode: "development",
        devtool: 'none',
        entry: [
            "@babel/polyfill",
            path.join(rootPath, 'server/server.prod.js')
        ],
        output: {
            path: path.join(rootPath, 'dist/server'),
            filename: '[name].js',
            chunkFilename: 'chunk.[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'happypack/loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,
                    use: [
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
            new HappyPack({
                loaders: ['babel-loader']
            }),
            new ProgressBarPlugin({summary: true}),
        ],
        externals: fs
            .readdirSync(path.resolve(__dirname, '../node_modules'))
            .filter(filename => !filename.includes('.bin'))
            .reduce((externals, filename) => {
                externals[filename] = `commonjs ${filename}`;
                return externals;
            }, {}),
        resolve: {
            extensions: ['.js', '.vue', '.less', '.scss', '.css',  '.jsx'],
            alias: {
                '$src': path.join(rootPath, '/client/src/')
            }
        },

    },
];
