const config = require("./webpack.config");
const { resolve } = require("path");

module.exports = (env, dirname) => {
  const filename = "index.js";
  return {
    ...config(env, dirname),
    output: {
      path: resolve(dirname, "./dist/cjs"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    },
  }
}
