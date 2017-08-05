var path = require('path');

module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },

    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader', 
                {
                    loader: 'css-loader', 
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }]
    }
};
