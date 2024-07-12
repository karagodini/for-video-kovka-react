const path = require("path");

const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
    assetModuleFilename: "[name][ext]",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      images: path.resolve(__dirname, "src/images/"),
    },
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: path.resolve(__dirname, "../src/images/"),
  //         to: path.resolve(__dirname, "../dist/images/"),
  //       },
  //     ],
  //   }),
  // ],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/i,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true,
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
