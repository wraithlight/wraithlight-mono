/**
 * To copy package.json file to dist.
 */

const { packageJsonCopyFn } = require("@wraithlight/tools.package-json-copy.base");
const { resolve } = require("path");

packageJsonCopyFn(
  resolve(__dirname, "package.json"),
  resolve(__dirname, "..", "dist", "node", "_package.json")
);
