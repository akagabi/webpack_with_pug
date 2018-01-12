const { resolve } = require( 'path' );

const plugins = {
    CleanWebpackPlugin: require( 'clean-webpack-plugin' )
}

const config = {
    context: resolve( __dirname, 'app' ),
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: resolve( __dirname, 'dist' )
    },
    devServer: {
        contentBase: resolve( __dirname, 'dist/assets' ),
        stats: 'errors-only',
        open: true,
        compress: true,
        port: 80
    },
    devtool: 'inline-source-map',
    module: {
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es6' ]
                    }
                }
            },
        ]
    },
    plugins: [
        new plugins.CleanWebpackPlugin( [ 'dist' ] )
    ]
}

module.exports = config