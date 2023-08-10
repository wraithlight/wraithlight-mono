const config = require("../../../webpack.config");

module.exports = (env) => {
  return {
    ...config(env, __dirname),
    target: "node"
  }
};
