const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

let config = {}
if (process.env.NODE_ENV === "development") {
  config = require("./config/development.json")
}

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app.js'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-env", "@babel/preset-react"],
          "plugins": ["@babel/plugin-proposal-class-properties"]
        }
      }, {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true
          }
        }]
      }, {
        test: /\.s?css$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }, 
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: {
    "Config": JSON.stringify(config)
  }
};