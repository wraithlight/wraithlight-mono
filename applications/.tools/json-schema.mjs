import { Validator } from "jsonschema";
import { readdirSync, readFileSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const libFolders = [
  "apps",
  "packages",
  ".swadoc"
];
const ignoreFolders = [
  "node_modules",
  "tools",
  "dist",
  ".angular",
  "coverage",
  "__mocks__"
];

const ignoreFoldersSwitch = "--ignoreFolders=";
const filesSwitch = "--files=";
const silentModeSwitch = "--silent";

const filesParam = process.argv.filter(m => m.startsWith(filesSwitch));
const hasFilesParam = filesParam.length > 0;

const isSilentRun = process.argv.includes(silentModeSwitch);

const ignoreFoldersParam = process.argv.filter(m => m.startsWith(ignoreFoldersSwitch));
const hasIgnoreFoldersParam = ignoreFoldersParam.length > 0;

if (!hasFilesParam) {
  throw `'--files={filename}' must be set!`;
}

const targetFiles = filesParam.map(m => m.replace(filesSwitch, ""));
const ignoredFolders = hasIgnoreFoldersParam
  ? ignoreFoldersParam[0].replace(ignoreFoldersSwitch, "").split(", ")
  : []
;

const getIgnoredFolderPaths = () => {
  return ignoredFolders.map(m => join(__dirname, "..", m));
}

function getAllJsonFiles() {
  const result = libFolders.map(m => {
    const path = join(__dirname, "..", m);
    const files = getJsonFiles(path);
    return files;
  });
  return result.flat();
}

function getJsonFiles(path) {
  const result = [];
  if (getIgnoredFolderPaths().includes(path)) return result;
  const content = readdirSync(path);
  for (const item of content) {
    if (ignoreFolders.includes(item)) continue;
    const itemPath = join(path, item);
    const stat = statSync(itemPath);
    if (stat.isDirectory()) {
      result.push(...getJsonFiles(itemPath));
    } else if (stat.isFile() && targetFiles.includes(item)) {
      const content = readFileSync(itemPath).toString();
      const jsonContent = JSON.parse(content);
      result.push({ content: JSON.parse(content), path: itemPath, $schema: jsonContent.$schema });
    }
  }
  return result;
}

function getSchemaFile({ path, $schema }) {
  const schema = readFileSync(join(path, "..", $schema)).toString();
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

const result = getAllJsonFiles().map(m => {
  if (!m.$schema) throw `No schema path defined in '${m.path}'!`;
  const schema = getSchemaFile(m);
  return {
    result: validate(m.content, schema),
    path: m.path
  };
});
if (result.length > 0) {
  const data = result.map(m => ({
    path: m.path,
    errors: m.result.map(o => o.property + " " + o.message)
  }));
  const errors = data.filter(m => m.errors.length > 0);
  if (errors.length > 0) {
    console.warn(errors);
    if (!isSilentRun) {
      throw `Found ${errors.length} errors!`;
    }
  }
}
