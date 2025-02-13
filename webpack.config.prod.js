const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/dist/",
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
