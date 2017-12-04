const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:  path.resolve(__dirname, 'src/client.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'src', 'static', 'js')
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude:  /(node_modules)/,
            use: 'babel-loader'
        }]
    },
    devServer: {
        port: 4242,
        contentBase: path.resolve(__dirname, 'src')
    }
};
