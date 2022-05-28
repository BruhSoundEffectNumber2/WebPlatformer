const {merge} = require("webpack-merge");
const common = require("./webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
});