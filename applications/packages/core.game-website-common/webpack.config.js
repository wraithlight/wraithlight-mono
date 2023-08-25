const config = require("../../webpack.package.config");

module.exports = (env) => {
  return {
    ...config(env, __dirname)
  }
};
