/**
 * This script was originally used to create the `.gitignore` files.
 * It walks all the folders recursively using tree-walker, and if it founds
 * a `package.json` it tries to create a `.gitignore`.
 * 
 * Usage:
 * * place it to the root folder
 * * run it by using `node ws-add-gitignore.mjs`
 */

import { EOL } from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, statSync, writeFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IGNORED_ITEMS = [
  "node_modules",
  "dist",
  "coverage"
];

const CONTENT = [
  "dist",
  "node_modules",
  "coverage",
  ".DS_Store",
  ".test-reports",
  ".angular"
].join(EOL);

function recursive(dirname) {
  console.log("dirname", dirname);
  const items = readdirSync(dirname);
  for (const item of items) {
    if (IGNORED_ITEMS.includes(item)) continue;
    const stat = statSync(join(dirname, item));
    if (stat.isFile()) {
      if (item === "package.json") {
        console.log(dirname, items.includes(".gitignore"))
        if (items.includes(".gitignore")) continue;
        writeFileSync(join(dirname, ".gitignore"), CONTENT);
      }
    }
    if (stat.isDirectory()) {
      recursive(join(dirname, item));
    }
  }
}
recursive(__dirname);
