/**
 * This script was originally used to update the `tsconfig.json` files.
 * It walks all the folders recursively using tree-walker, and if it founds
 * a `tsconfig.json` it checks if include and exclude props should be added.
 * 
 * Usage:
 * * place it to the root folder
 * * run it by using `node tsconfig-ignore-specs.mjs`
 */

import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readFileSync, readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IGNORED_ITEMS = [
    "node_modules",
    "dist",
    "coverage"
];

function recursive(dirname) {
    const items = readdirSync(dirname);
    for(const item of items) {
        if(IGNORED_ITEMS.includes(item)) continue;
        const stat = statSync(join(dirname, item));
        if(stat.isFile()) {
            if(item === "tsconfig.json") {
                const path = join(dirname, item);
                console.log(path);
                const content = readFileSync(path).toString();
                console.log(content);
                const jsonContent = JSON.parse(content);
                if (!jsonContent.include) {
                    jsonContent.include = [];
                }
                if (!jsonContent.exclude) {
                    jsonContent.exclude = [];
                }

                if (!jsonContent.include.includes("src")) {
                    jsonContent.include.push("src");
                }
                if (!jsonContent.exclude.includes("**/*.spec.ts")) {
                    jsonContent.exclude.push("**/*.spec.ts")
                }
            }
        }
        if(stat.isDirectory()) {
            recursive(join(dirname, item));
        }
    }
}
recursive(__dirname);
