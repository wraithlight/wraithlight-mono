const { resolve } = require("path");
const config = require("../../../webpack.config");

module.exports = (env) => {
  const filename = "index.js";
  return {
    ...config(env, __dirname),
    output: {
      path: resolve(__dirname, "./dist/node"),
      filename,
      clean: true,
      libraryTarget: "commonjs2"
    },
    target: "node"
  }
};
