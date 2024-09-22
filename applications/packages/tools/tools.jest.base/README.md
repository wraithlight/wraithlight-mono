# @wraithlight/tools.jest.base

This library contains the base `jest.config.js` file for all packages under `@wraithlight` scope.
The configuration is open for overwrite or extend.

Usage:

```js

const { jestConfig } = require("@wraithlight/tools.jest.base");

module.exports = (project) => jestConfig(project, __dirname);

```
