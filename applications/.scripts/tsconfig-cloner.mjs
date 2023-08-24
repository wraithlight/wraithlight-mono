import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { cpSync, readdirSync, rmSync, statSync } from 'fs';

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
                cpSync(join(dirname, item), join(dirname, "tsconfig.build.json"));
            }
            if(item === "tsonfig.build.json") {
                rmSync(join(dirname, item));
            }
        }
        if(stat.isDirectory()) {
            recursive(join(dirname, item));
        }
    }
}
recursive(__dirname);
