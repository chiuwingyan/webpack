/**
 * 生产环境配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch', path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'] //第三方库，一般不会改变，定义在vendor中分离出来。
    },
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),  //指示输出的目录
        filename : '[name].[chunkhash].js', //chunkhash和webpack-dev-server不兼容，生产环境删除了就可以使用chunkhash
        chunkFilename: '[name].[chunkhash].js', //打包后的名字为当前组件的名字，详见router.js里面引入组件的方法,这里定制的是非entry入口文件的命名规则，如按需加载的文件
        publicPath: '/'                 //相对于当前路径
    },
    /**加载的模块 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader?presets[]=es2015&presets[]=react']
            }, {
                test: /\.scss$/, //并且想要把css文件作为<style>的内容插入到模版文件中，需要css-loader和style-loader,前者是让js可以加载css，后者把加载的css作为style标签内容插入到html当中
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['sass-loader','css-loader','postcss-loader']
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
    resolve: {
        alias: { //文件路径优化
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'router')
        }
    },
    devtool : 'cheap-module-source-map', //生产环境的配置

    plugins: [
        new HtmlWebpackPlugin({ //此插件帮助我们每次自动把js插入到index.html模板当中，entry里面的key有多少个，对应就会生成多少个
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.dev.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({ //对应entry里面的vendor
            name: ['vendor', 'runtime']   //runtime包括在vendor里面，然而entry有内容变更时，由于webpack的依赖收集规则会导致对应的chunk编号发生变动，其最后runtime也跟着变，
                                         //把runtime在vendor分离出来，就不会每次改变chunkhash都会造成vendor也更新
            }),
        new UglifyJSPlugin(),    //打包后文件压缩
        new webpack.DefinePlugin({ //使用nodejs环境执行脚本时，通过这个属性来区分不同环境（开发、生产、测试等）下的应用程序打包、构建、运行策略。
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(),      //该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
        new CleanWebpackPlugin(['dist']),        //打包前自动清除dist文件
        new ExtractTextPlugin({
            filename:'[name].[contenthash:5].css',
            allChunks:true
        })
    ]
};