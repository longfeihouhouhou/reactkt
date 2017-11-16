let path = require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve('build'),//输出的目录
        filename:'bundle.js'//输出的文件名
    },
    devServer: {
        historyApiFallback: true,
    },
    //配置模块
    module:{
        rules:[// 模块加载规则
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|git|svg|gif)$/,use:'url-loader'}
        ],
    },
    devtool:'cheap-module-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
};
