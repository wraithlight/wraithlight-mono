const {
  readFileSync,
  writeFileSync
} = require("fs");

const fileCopy = (
  srcLocation,
  dstLocation,
  modifierFn = (content) => content
) => {
  console.log(`Copy from '${srcLocation}' to '${dstLocation}'`);
  const content = readFileSync(dstLocation).toString();
  const newContent = modifierFn(content);
  writeFileSync(dstLocation, newContent);
}

module.exports = {
  fileCopy
};
