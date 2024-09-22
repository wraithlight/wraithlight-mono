const { resolve } = require("path");
const config = require("@wraithlight/tools.webpack.base").beConfig;

module.exports = (env) => {
  const filename = "index.js";
  return {
    ...config(env, __dirname),
    target: "node",
    output: {
      path: resolve(__dirname, "../dist/node"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    }
  }
};
