const createEntry = (e, fn) => [`${e}-${fn}`, `./src/${e}/${fn}/index.scss`];

const ENTRIES = Object.fromEntries([
  createEntry("button", "primary"),
  createEntry("button", "secondary")
]);

module.exports = { ENTRIES };
