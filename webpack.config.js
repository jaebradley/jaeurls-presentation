const path = require('path');
const webpack = require('webpack');

const config = {
  entry: [
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js'
  ],

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: 'public',
    inline: true,
    port: 9090,
    hot: true,
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;
