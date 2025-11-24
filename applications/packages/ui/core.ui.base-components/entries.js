const createEntry = (e, fn) => [`${e}-${fn}`, `./src/${e}/${fn}/index.scss`];

const ENTRIES = Object.fromEntries([
  createEntry("button", "primary"),
  createEntry("button", "secondary"),
  createEntry("button", "tertiary"),
  createEntry("button", "outline-primary"),
  createEntry("button", "outline-secondary"),
  createEntry("button", "outline-tertiary"),
  createEntry("button", "function-success"),
  createEntry("button", "function-warning"),
  createEntry("button", "function-danger")
]);

module.exports = { ENTRIES };
