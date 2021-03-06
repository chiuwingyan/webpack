const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
/**
 * 开发环境配置
 */
const devConfig = {
 
    /*入口*/
    entry: {
        app:[
            'react-hot-loader/patch',
            "babel-polyfill",          
            path.join(__dirname, 'src/index.js')
        ]
    },    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        filename: '[name].[hash].js',   //这里在生产环境是chunkhash，但是chunkhash和react-hot-loader不兼容，开发环境只能妥协
       // publicPath: '/'
    },

    /**webpack-dev-server配置 */
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'./dist'),//设置url的根目录，如果不设置，则默认是指向项目根目录
        historyApiFallback : true,//让所有404的页面定位到index.html
        hotOnly:true,
        proxy: {
            "/api/*":"http://localhost:8090/$1"             //设置代理本地帮助我们把请求重定向到实际请求的服务器上，可用于解决跨域
        }
    },

    plugins: [
        new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(),   //hot module replacement 启动模块热替换的插件
        // new webpack.DefinePlugin({          //创建一个在编译时可以配置的全局常量
        //     MOCK:true           //开发环境下才开启
        // })
    ]
};
/**与公用配置合并 */
module.exports=merge({
    customizeArray(a,b,key){
        /**entry.app不合并，而是替换*/
        if(key === 'entry.app'){
            return b;
        }
        return undefined;
    }
})(commonConfig,devConfig)