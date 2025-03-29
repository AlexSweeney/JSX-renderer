const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    port: 3000,
  }
}