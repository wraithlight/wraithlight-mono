const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = (env) => {
  const isProduction = env.production;
  const cfg = {
    mode: isProduction ? "production" : "development",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: isProduction ? "bundle.min.js" : "bundle.js"
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
                // modules: true,
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
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
    },
  };
  return cfg;
};

module.exports = config;
