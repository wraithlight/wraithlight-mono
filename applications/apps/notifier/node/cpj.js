/**
 * To copy package.json file to dist.
 */

const copy = require("@wraithlight/tools.package-json-copy.base");
const { resolve } = require("path");

copy(
    resolve(__dirname, "package.json"),
    resolve(__dirname, "..", "dist", "node", "_package.json")
);
