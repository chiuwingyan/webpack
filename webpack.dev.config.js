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
        filename: 'bundle.js',
        chunkFilename:'[name].js'  //打包后的名字为当前组件的名字，详见router.js里面引入组件的方法
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
            },
            {
                test: /\.scss$/,    //并且想要把css文件作为<style>的内容插入到模版文件中，需要css-loader和style-loader,前者是让js可以加载css，后者把加载的css作为style标签内容插入到html当中
                use: ['style-loader', 'css-loader','sass-loader','postcss-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,      //编译图片，图片可以通过import到js里面使用
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192              //小于等于8k的图片会被转成banse64编码，直接插入html中。减少http请求
                    }
                }]
        }] 
    },
    /**webpack-dev-server配置 */
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'./dist'),//设置url的根目录，如果不设置，则默认是指向项目根目录
        historyApiFallback : true,//让所有404的页面定位到index.html
        host:'0.0.0.0'
    },
    resolve:{
        alias: {                 //文件路径优化
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'router')
        }
    },
    devtool:'inline-source-map'
};