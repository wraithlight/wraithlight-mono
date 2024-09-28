const { resolve } = require("path");

const coreConfig = (env, dirname, tsConfigPath) => {
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
          use: [{
            loader: "ts-loader",
            options: {
              configFile: tsConfigPath
            }
          }],
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

const beConfig = (env, dirname, tsConfigPath) => {
  const core = coreConfig(env, dirname, tsConfigPath);
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
const feConfig = (env, dirname, tsConfigPath) => {
  const core = coreConfig(env, dirname, tsConfigPath);
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
