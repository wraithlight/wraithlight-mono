import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

console.group();
console.log("Patching multiview...");

const filePath = join(__dirname, "..", "node_modules", "multiview", "cli");
const fileName = "startServer.js";

const linePairs = [
    ["readableObjectMode: true", "// readableObjectMode: true"]
];

const path = join(filePath, fileName);

let content = readFileSync(path).toString();
for (const pair of linePairs) {
    if (content.includes(pair[1])) {
        console.log("No patch needed!");
        continue;
    }
    content = content.replace(pair[0], pair[1]);
}

writeFileSync(path, content);

console.log("Multiview has been patched");
console.groupEnd();
