var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

const Config = {

    entry: path.resolve(__dirname, "./index.js"),
    output: {
        fileName: "bundle.js",
        path: __dirname,
    },


    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {from: __dirname + '/images', to: __dirname + '/build/images'}
        // ])
    ],

}

module.exports = Config;