import { Validator } from "jsonschema";
import { readdirSync, readFileSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const libFolders = [
    "apps",
    "packages"
];
const targetFiles = [
    "package.json"
];
const schemaFile = "package.json.schema.json";

function getAllPackageJsonFiles() {
    const result = libFolders.map(m => {
        const path = join(__dirname, "..", m);
        const files = getPackageJsonFiles(path);
        return files;
    });
    return result.flat();
}

function getPackageJsonFiles(path) {
    const result = [];
    const content = readdirSync(path);
    for (const item of content) {
        const itemPath = join(path, item);
        const stat = statSync(itemPath);
        if(stat.isDirectory()) {
            result.push(...getPackageJsonFiles(itemPath));
        } else if (stat.isFile() && targetFiles.includes(item)) {
            const content = readFileSync(itemPath).toString();
            result.push({ content: JSON.parse(content), path: itemPath });
        }
    }
    return result;
}

function getSchemaFile() {
    const schema = readFileSync(join(__dirname, "..", schemaFile)).toString();
    return JSON.parse(schema);
}

function validate(content, schema) {
    const validator = new Validator();
    const result = validator.validate(content, schema);
    if (Array.isArray(result.errors)) {
        return result.errors;
    } else if (typeof result.errors === "object") {
        return [result.errors];
    } else {
        return [];
    }
}

const schema = getSchemaFile();
const result = getAllPackageJsonFiles().map(m => ({ result: validate(m.content, schema), path: m.path }));
if (result.length > 0) {
    const data = result.map(m => ({
        path: m.path,
        errors: m.result.map(o => o.property + " " + o.message)
    }))
    throw data;
}
