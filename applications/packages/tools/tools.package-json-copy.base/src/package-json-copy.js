const {
  copyFileSync,
  readFileSync,
  writeFileSync
} = require("fs");

module.exports = (srcLocation, dstLocation) => {
  console.log(`Copy from '${srcLocation}' to '${dstLocation}'`);
  copyFileSync(srcLocation, dstLocation);
  const content = readFileSync(dstLocation).toString();
  const data = JSON.parse(content);
  data.dependencies = {};
  data.devDependencies = {};
  data.peerDependencies = {};
  const newContent = JSON.stringify(data, undefined, 2);
  writeFileSync(dstLocation, newContent);
}
