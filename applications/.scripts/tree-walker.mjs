/**
 * This script was created at the same time as `tsconfig-cloner.mjs`.
 * The purpose of this script is to behave as a skeleton script if
 * something that is wallking around the folders recursively is needed.
 * 
 * Usage:
 * * copy this script into the root folder
 * * add the required logic inside the `recursive` function (skipping folders,
 *   working with files/folders)
 * * save it
 * * run it by using `yarn tree-walker.mjs`
 */

import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function recursive(dirname) {
    const items = readdirSync(dirname);
    for(const item of items) {
        const stat = statSync(join(dirname, item));
        if(stat.isFile()) {

        }
        if(stat.isDirectory()) {
            recursive(join(dirname, item));
        }
    }
}
recursive(__dirname);
