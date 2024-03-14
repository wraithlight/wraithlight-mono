const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const config = require("@wraithlight/tools.webpack.base");

module.exports = (env) => {
  const isProduction = env.production;
  const filename = "index.js";
  return {
    ...config(env, __dirname),
    output: {
      path: resolve(__dirname, "./dist/ui"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: isProduction
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "bundle.min.css" : "bundle.css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 2
              }
            },
            "sass-loader"
          ],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            minimize: {
              removeComments: false
            }
          }
        }
      ]
    }
  }
};
