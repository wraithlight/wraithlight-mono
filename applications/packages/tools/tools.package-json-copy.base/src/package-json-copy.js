const { copyFileSync } = require("fs");

module.exports = (srcLocation, dstLocation) => {
  console.log(`Copy from '${srcLocation}' to '${dstLocation}'`);
  copyFileSync(srcLocation, dstLocation);
}
