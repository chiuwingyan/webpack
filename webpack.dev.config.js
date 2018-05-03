const path = require('path');

module.exports = {
 
    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js'),
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    /**加载的模块 */
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
             },
            {
            test: /\.jsx?$/,
            use:['babel-loader?presets[]=es2015&presets[]=react']
            }] 
    },
    /**webpack-dev-server配置 */
    devServer:{
        contentBase:path.join(__dirname,'./dist'),//设置url的根目录，如果不设置，则默认是指向项目根目录
        historyApiFallback : true,//让所有404的页面定位到index.html
    }
};