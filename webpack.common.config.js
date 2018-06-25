/**
 * 开发环境和生产环境的公共配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
commonConfig={
    /*入口*/
    entry: {
        app:[          
            "babel-polyfill",       //babel只能转换新的js句法，例如let这些，但是不会转换新的api，例如Iterator、Generator、Set、Maps等，因此要加入babel-polyfill用于支持。
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'] //第三方库，一般不会改变，定义在vendor中分离出来。
    },    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',    //对entry文件的打包,[name]是占位符，对于entry里面的每个key,使得打包生产的文件唯一。生成的hash用于缓存，不需要每次都下载文件,
        chunkFilename:'[name].[chunkhash].js',  //打包后的名字为当前组件的名字，详见router.js里面引入组件的方法,这里定制的是非entry入口文件的命名规则，如按需加载的文件
   
    },
     /**加载的模块 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                exclude:/(node_modules|bower_components)/,      //babel编译去除node_mocules
                include: path.join(__dirname, 'src')
            }, {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                use: ['babel-loader?presets[]=es2015&presets[]=react']
            }, {
                test: /\.scss$/, //并且想要把css文件作为<style>的内容插入到模版文件中，需要css-loader和style-loader,前者是让js可以加载css，后者把加载的css作为style标签内容插入到html当中
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use : ['css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'sass-loader', 'postcss-loader'] //modules打开css-modules功能，使得组件可以局部使用css，可以把类名编译成hash字符串.localIdentName为编译后类名格式
                })
            }, {
                test: /\.(png|jpg|gif)$/, //编译图片，图片可以通过import到js里面使用
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 //小于等于8k的图片会被转成banse64编码，直接插入html中。减少http请求
                        }
                    }
                ]
            }
        ]
    },
        plugins:[
            new HtmlWebpackPlugin({            //此插件帮助我们每次自动把js插入到index.html模板当中，entry里面的key有多少个，对应就会生成多少个
            filename:'index.html',
            template:path.join(__dirname,'src/index.dev.html')
            }),
            new webpack.optimize.CommonsChunkPlugin({ //对应entry里面的vendor
                name: ['vendor','runtime']
            }),
            new ExtractTextPlugin({ //单独生成css文件
                filename: '[name].[contenthash:5].css',
                allChunks: true
            })
    ],
        resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        },
        extensions: [".jsx",".js"], 
    }
}

module.exports=commonConfig;