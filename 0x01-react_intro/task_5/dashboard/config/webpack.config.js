const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, '/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: './deploy',
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
      },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
  module: {
    rules: [
        ...
        { 
          test: /\.css$/, 
          use: ["style-loader", "css-loader"] 
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
          },
        
       
      ]
  },

};



