const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname,"index.js"),
    },
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        path: path.resolve(__dirname,'dist/'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    }
};