const config = require("@wraithlight/tools.webpack.base").beConfig;
const { resolve } = require("path");

module.exports = (env) => {
  const filename = "index.js";
  return {
    ...config(env, __dirname, "tsconfig.build.json"),
    target: "node",
    output: {
      path: resolve(__dirname, "../dist/node"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    }
  }
};
