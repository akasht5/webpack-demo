const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output : {
        assetModuleFilename: 'images/[name].[hash],[ext]'
    },
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
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)/,
                type: "asset/resource"
            }
        ]
    }
}