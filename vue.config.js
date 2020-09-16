const webpack = require('webpack');
module.exports = {

    publicPath: (process.env.NODE_ENV === 'production') ? '/' : (process.env.NODE_ENV === 'test' ? '/' : '/'),
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    chainWebpack: config => {
        // 关闭预先加载模块
        config.plugins.delete('prefetch');
        config
            .entry('index')
            .add('babel-polyfill')
    }
};
