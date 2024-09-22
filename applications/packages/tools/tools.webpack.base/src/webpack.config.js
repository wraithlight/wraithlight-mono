const { resolve } = require("path");

const coreConfig = (env, dirname) => {
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
}

const beConfig = (env, dirname) => {
  const core = coreConfig(env, dirname);
  return {
    ...core,
    target: "node",
    output: {
      path: resolve(dirname, "../dist/node"),
      filename: "index.js",
      clean: true,
      libraryTarget: "commonjs2"
    }
  }
};
const feConfig = (env, dirname) => {
  const core = coreConfig(env, dirname, {});
  return {
    ...core,
    output: {
      path: resolve(dirname, "../dist/ui"),
      filename: "index.js",
      clean: true,
      libraryTarget: "commonjs2"
    },
  }
}

module.exports = {
  default: coreConfig,
  beConfig,
  feConfig,
};
