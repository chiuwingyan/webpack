const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']         //将用到的第三方插件添加到vendor中
    },
    output: {
        path:path.resolve(base.path),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            path: path.resolve('./dist','[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}