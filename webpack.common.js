const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    }
}