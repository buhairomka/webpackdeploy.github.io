const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "products", to: "products" },
                { from: "export", to: "export" },
                { from: "slider", to: "slider" },
            ],
        }),
    ]
};
