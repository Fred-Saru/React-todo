var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre", 
                test: /\.js?$/,
                use: ['source-map-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true    
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        config: JSON.stringify({
            apiUrl: "http://localhost:1234/api/v1"
        })
    },
    devtool: "source-map"
}
