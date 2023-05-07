const { resolve } = require("path");

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
    }
  };
  return cfg;
};

module.exports = config;
