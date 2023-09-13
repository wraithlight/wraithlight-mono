const config = require("../../../webpack.config");
const { resolve } = require("path");

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
