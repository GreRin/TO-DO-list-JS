/* eslint-disable no-useless-escape */
/* eslint-disable global-require */
const path = require('path');
const glob = require('glob');
const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/dist');

const config = {
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: distPath,
    },
    module: {
        rules: [
            {
                test: /favicon.ico$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                isProduction ? require('cssnano') : () => {},
                                require('autoprefixer')({
                                    browsers: ['last 2 versions'],
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /images[\\\/].+\.(gif|png|ico|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70,
                            },
                        },
                    },
                ],
            },
            {
                test: /fonts[\\\/].+\.(otf|eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name][hash].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        ...glob.sync('./src/*.html').map((htmlFile) => {
            return new HtmlWebpackPlugin({
                filename: path.basename(htmlFile),
                template: htmlFile,
            });
        }),
        new CopyPlugin([{ from: './src/favicon.ico', to: './favicon.ico' }]),
    ],
    optimization: isProduction
        ? {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            inline: false,
                            drop_console: true,
                        },
                    },
                }),
            ],
        }
        : {},
};

module.exports = config;
