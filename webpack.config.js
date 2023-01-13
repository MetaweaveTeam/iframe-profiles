const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const html = new HtmlWebpackPlugin({
  template: "./src/index.html",
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
