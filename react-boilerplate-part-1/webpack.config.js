const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolvePath = segment => resolve(__dirname, segment);
module.exports = {
    target: 'web',
    entry: './src/index.tsx',
    output: {
        path: resolvePath('build'),
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolvePath('index.html'),
            title: 'Boilerplate',
        }),
    ],
    devServer: {
        hot: true,
        port: 8080,
    },
};
