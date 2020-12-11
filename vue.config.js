module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/'
}