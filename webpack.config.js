const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TrserWebpackPlugin = require("terser-webpack-plugin");

const isDeveloment = process.env.NODE_ENV === 'development';
const optimization = () => {
    const config = {};

    if (!isDeveloment) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TrserWebpackPlugin()
        ];
    }

    return config;
};
const filename = (name, extension) => isDeveloment ? `${name}.${extension}` : `${name}.[fullhash].${extension}`;
const cssLoaders = (extraLoaderName) => {
    const loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ];

    if (extraLoaderName) loaders.push(`${extraLoaderName}-loader`);
    return loaders;
};
const jsOptions = (extraPreset) => {
    const options = {
        presets: ['@babel/preset-env']
    };

    if (extraPreset) options.presets.push(extraPreset);
    return options;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.jsx'],
    output: {
        filename: filename("index", "js"),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', ".jsx", '.css', '.scss', '.ttf']
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDeveloment
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/icons/favicon.ico'),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename("main", "css"),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[a|c]ss$/,
                use: cssLoaders("sass")
            },
            {
                test: /\.[ttf|woff|woff2|eot]$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: jsOptions()
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: jsOptions('@babel/preset-react')
                }
            }
        ]
    }
};
