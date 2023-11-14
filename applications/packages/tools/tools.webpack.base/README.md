# @wraithlight/tools.webpack.base

This library contains the base `webpack.config.js` file for all packages under `@wraithlight` scope.
The configuration is open for overwrite or extend.

Limitations:
* the main entry must be `src/index.ts`
* the output will be `dist/index.js`
* `ts-loader` is a required dependency

Usage:

```js

const config = require("@wraithlight/tools.webpack.base");

module.exports = (env) => config(project, __dirname);

```
