const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /.(jsx?|tsx?)$/,
        loader: "babel-loader",
        exclude: { test: /node_modules/ },
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
