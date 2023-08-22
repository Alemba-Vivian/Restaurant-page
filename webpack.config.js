const path = require('path');

module.exports ={
    mode:'development',
    entry: './src/index.js',

    //checking out the error
    devtool:'inline-source-map',

    //we dont have to reload our browser, it will automatically do that for us
    devServer:{
        static:'./dist',
    },

    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath:'/',
    },

    //if you have more entry points
    // optimization:{
    //     runtimeChunk:'single',
    // },
};