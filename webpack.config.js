'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: {
        styles: ['./src/static/scss/styles.scss'],
        main: ['./src/static/js/main.js']
    },
    output: {
        path: path.resolve('./_site/static/'),
        filename: 'js/[name].js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    }
};

module.exports = [
    // Development webpack config
    {
        name: 'development',
        entry: config.entry,
        output: config.output,

        plugins: [
            // Dist clean
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            }),

            // Stylelint plugin
            new StyleLintPlugin({
                configFile: '.stylelintrc',
                context: '',
                files: '/static/src/scss/**/*.scss',
                syntax: 'scss',
                failOnError: false,
                quiet: false
            })
        ],

        module: {
            rules: [
                {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
                    exclude: /node_modules/,
                    type: 'asset/resource'
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        }
                    ]
                }
            ]
        },

        stats: {
            modules: false
        },

        // Create Sourcemaps for the files
        devtool: 'source-map'
    },
    // Production webpack config
    {
        name: 'production',
        entry: config.entry,
        output: config.output,

        plugins: [
            // Specify the resulting CSS filename
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),

            // Stylelint plugin
            new StyleLintPlugin({
                configFile: '.stylelintrc',
                context: '',
                files: '/static/src/scss/**/*.scss',
                syntax: 'scss',
                failOnError: false,
                quiet: false
            })
        ],

        module: {
            rules: [
                {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
                    exclude: /node_modules/,
                    type: 'asset/resource'
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
];
