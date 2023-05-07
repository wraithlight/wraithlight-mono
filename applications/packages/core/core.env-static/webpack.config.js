const { resolve } = require("path");
const { NormalModuleReplacementPlugin } = require("webpack");

const config = (env) => {
  const isProduction = env.production;
  const filename = "index.js";
  const cfg = {
    mode: isProduction ? "production" : "development",
    entry: [
      "./src/index.ts"
    ],
    output: {
      path: resolve(__dirname, "./dist"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    plugins: isProduction
      ? [
          new NormalModuleReplacementPlugin(
            /src\/static.dev\.ts/,
            "./static.prod.ts",
          )
        ]
      : []
  };
  return cfg;
};

module.exports = config;