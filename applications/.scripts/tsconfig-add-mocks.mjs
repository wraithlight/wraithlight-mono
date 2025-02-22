/**
 * This script was originally used to update the `tsconfig.json` files.
 * It walks all the folders recursively using tree-walker, and if it founds
 * a `tsconfig.json` and removes the exclude fields.
 * 
 * Usage:
 * * place it to the root folder
 * * run it by using `node tsconfig-add-spec.mjs`
 */

import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IGNORED_ITEMS = [
  "node_modules",
  "dist",
  "coverage"
];

function recursive(dirname) {
  const items = readdirSync(dirname);
  for (const item of items) {
    if (IGNORED_ITEMS.includes(item)) continue;
    const stat = statSync(join(dirname, item));
    if (stat.isFile()) {
      if (item === "tsconfig.json") {
        const path = join(dirname, item);
        console.log(path);
        const content = readFileSync(path).toString();
        const jsonContent = JSON.parse(content);

        if (jsonContent.include && !jsonContent.include.includes("__mocks__")) {
          jsonContent.include.push("__mocks__");
        }

        writeFileSync(join(dirname, item), JSON.stringify(jsonContent, undefined, 2));
      }
    }
    if (stat.isDirectory()) {
      recursive(join(dirname, item));
    }
  }
}
recursive(__dirname);
