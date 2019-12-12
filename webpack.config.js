const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
