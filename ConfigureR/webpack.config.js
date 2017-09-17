    const path = require('path');
    require("./style.css");

  const HtmlWebpackPlugin = require('html-webpack-plugin');

    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
  })

  module.exports = {
    entry: './client/index.js',
    output: {
      path: __dirname + "/dist",
      filename: "index.js"
    },
    module: {
      loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                      fallbackLoader: "style-loader",
                      loader: "css-loader!sass-loader",
          }),
          }
      ]
    },
    plugins: [
      HtmlWebpackPluginConfig,
       new ExtractTextPlugin("client/style.css"),
    ]
  }
