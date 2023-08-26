/**
 * This script was used to align the jest config files to their new 'reuseable' structure.
 * 
 * Usage:
 * * copy this script into the root (applications) folder
 * * run it by using `yarn bulk-jest-editor.mjs`
 */

import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readdirSync, statSync, writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IGNORED_ITEMS = [
    "node_modules",
    "dist",
    "coverage"
];

function recursive(dirname, depth) {
    const items = readdirSync(dirname);
    for(const item of items) {
        if(IGNORED_ITEMS.includes(item)) continue;
        const stat = statSync(join(dirname, item));
        if(stat.isFile()) {
            if (item === "jest.config.js") {
                let path = "const config = require(\"";
                for (let i = 0; i < depth; i++) {
                    path += "../"
                }
                path = path.concat("jest.config.js\")");
                writeFileSync(join(dirname, item), path);
            }
        }
        if(stat.isDirectory()) {
            recursive(join(dirname, item), depth + 1);
        }
    }
}
recursive(__dirname, 0);
