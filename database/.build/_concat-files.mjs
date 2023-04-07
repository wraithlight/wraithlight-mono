import {
    existsSync,
    readdirSync,
    readFileSync
} from "fs";
import { EOL } from "os";
import { join } from "path";

export function concatFiles(
    filesPath
) {
    const data = [];
    if (!existsSync(filesPath)) {
        return data.join(EOL);
    }
    const files = readdirSync(filesPath);
    for (const file of files) {
        console.log(`┠-- ${file}`);
        const filePath = join(filesPath, file);
        const buffer = readFileSync(filePath);
        const content = [
            `-- ${filePath}`,
            buffer
        ].join(EOL);
        data.push(content);
    }
    return data.join(EOL);
}
