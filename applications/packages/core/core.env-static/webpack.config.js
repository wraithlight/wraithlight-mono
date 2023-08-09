const { NormalModuleReplacementPlugin } = require("webpack");

const config = require("../../../webpack.config");

module.exports = (env) => {
  const isProduction = env.production;
  return {
    ...config(env, __dirname),
    plugins: isProduction
    ? [
        new NormalModuleReplacementPlugin(
          /src\/static.dev\.ts/,
          "./static.prod.ts",
        )
      ]
    : []
  }
};
