/**
 * To copy package.json file to dist.
 */

const { packageJsonCopyFn } = require("@wraithlight/tools.package-json-copy.base");
const { resolve } = require("path");

packageJsonCopyFn(
    resolve(__dirname, "swagger.json"),
    resolve(__dirname, "..", "dist", "node", "swagger.json")
);
