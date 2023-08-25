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
