
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { whenProd} = require('@craco/craco');
const { version } = require('./package.json');
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {

    webpack: {
        configure: (webpackConfig, {env, paths}) => {

            if (env == 'development') {
                webpackConfig.devtool = 'source-map';
            } else {
                webpackConfig.devtool = false;
            }

            webpackConfig.output.filename = `static/js/[name].[hash:8]-${version}.js`;
            webpackConfig.output.chunkFilename = `static/js/[name].[hash:8]-${version}.js`;


            return webpackConfig
        },


        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'commons',
                        chunks: 'all',
                        minChunks: 2
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },

        plugins: [
            ...whenProd(
                ()=>[
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            warnings: false,
                            compress: {
                                drop_debugger: true,
                                drop_console: true,
                            },
                        },
                        sourceMap: false,
                        parallel: true,
                    }),
                    new SplitChunksPlugin({
                        chunks: "all",
                        minSize: 30000,
                        minChunks: 1,
                        maxAsyncRequests: 5,
                        maxInitialRequests: 3,
                        name: true
                    }),
                    new CompressionWebpackPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css|html|svg)$/,
                        threshold: 1024,
                        minRatio: 0.8
                    })
                ],[])


        ],

    },

};
