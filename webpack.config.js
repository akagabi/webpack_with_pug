const { resolve, join } = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const HtmlPugWebpackPlugin = require( 'html-webpack-template-pug' ) 
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

const plugins = {
    CleanWebpackPlugin: require( 'clean-webpack-plugin' ),
    extractSass: new ExtractTextPlugin( {
        filename: "main.css"
    } )
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
                        presets: [ 'env' ]
                    }
                }
            },
            {
                test: /\.pug$/,
                loaders: ['file-loader?name=[path][name].html', 'pug-html-loader?pretty&exports=false']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    },
    plugins: [
        new plugins.CleanWebpackPlugin( [ 'dist' ] ),
        plugins.extractSass
    ]
}

module.exports = config