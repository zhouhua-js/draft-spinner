const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/spinner.js',
    output: {
        filename: 'spinner.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    target: 'node'
};
