const path = require("path");

const NODE_ENV = process.env.NODE_ENV;
const CopyPlugin = require("copy-webpack-plugin");
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const webpack = require("webpack");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
    alias: {
      images: path.resolve(__dirname, "src/images/"),
    }
  },

  mode: NODE_ENV ? NODE_ENV : "development",

  entry: path.resolve(__dirname, "../src/client/index.jsx"),
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/images/"),
          to: path.resolve(__dirname, "../dist/images/"),
        },
        {
          from: path.resolve(__dirname, "../sitemap.xml"),
          to: path.resolve(__dirname, "../dist/sitemap.xml"),
        },
        {
          from: path.resolve(__dirname, "../robots.txt"),
          to: path.resolve(__dirname, "../dist/robots.txt"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
