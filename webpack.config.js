const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },

    //adding htmlwebpackplugin that will automatically create index.html 
    plugins:[
        new HtmlWebpackPlugin({
            title:'Restaurant Page',
            template:'src/template.html',
        })

    ],
    //checking out the error
    devtool:'inline-source-map',

    //we dont have to reload our browser, it will automatically do that for us
    devServer:{
        static:'./dist',
    },

    output:{
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        publicPath:'/',
    },

     //working with loaders
     module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],

     },
 

    //if you have more entry points
    optimization:{
        runtimeChunk:'single',
    },
};