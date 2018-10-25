/**
 * 生产环境配置
 */
const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

const publicConfig= {
    devtool: 'cheap-module-source-map',

};    plugins: [
        new UglifyJSPlugin({
            cache:true,
            parallel: true
        }),    //打包后文件压缩
        new webpack.DefinePlugin({ //使用nodejs环境执行脚本时，通过这个属性来区分不同环境（开发、生产、测试等）下的应用程序打包、构建、运行策略。
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(),      //该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
        new CleanWebpackPlugin(['dist'])        //打包前自动清除dist文件,只需用作生产环境
    ]

module.exports = merge(commonConfig,publicConfig);