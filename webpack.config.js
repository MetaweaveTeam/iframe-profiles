const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const html = new HtmlWebpackPlugin({
  template: "./src/index.html",
  // minify
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  },
});
module.exports = {
  mode: "development",
  entry: ["./src/main.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [html],
};
