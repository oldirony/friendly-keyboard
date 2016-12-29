var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './assets/js/main.js',
        './assets/sass/main.scss'
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'source-map',
    output: {
        filename: './dist/main.js'
    },
    plugins : [
        new ExtractTextPlugin({ filename: './dist/main.css', disable: false, allChunks: true })
    ]
};