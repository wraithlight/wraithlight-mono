const { resolve } = require("path");

module.exports = config = (env, dirname) => {
  const isProduction = env.production;
  const filename = "index.js";
  const cfg = {
    mode: isProduction ? "production" : "development",
    entry: [
      "./src/index.ts"
    ],
    output: {
      path: resolve(dirname, "./dist"),
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

