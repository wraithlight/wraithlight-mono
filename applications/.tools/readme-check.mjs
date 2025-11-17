import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readFileSync, readdirSync, statSync } from 'fs';
import { EOL } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entries = [
  "apps",
  "packages",
  "poc"
];

const ignoredFolders = [
  "node_modules",
  "dist",
  "coverage"
]

const isSilent = (process.argv[2] || "") === "--silent"

const _missingReadmes = [];
const _wrongReadmes = [];

function checkPackageDocs(
  rootFolder
) {
  const items = readdirSync(rootFolder)
  const hasPackageJson = items.filter(m => m === "package.json").length > 0;
  const hasReadmeMd = items.filter(m => m === "README.md").length > 0;

  if (hasPackageJson && hasReadmeMd) {
    const packageName = getPackageName(join(rootFolder, "package.json"));
    const readmeTitle = getReadmeTitle(join(rootFolder, "README.md"));

    const packageInternalName = packageName.replace("@wraithlight/", "");

    if (readmeTitle !== `## ${packageInternalName}`) {
      _wrongReadmes.push(packageName);
    }

    return;
  }

  if (hasPackageJson && !hasReadmeMd) {
    const packageName = getPackageName(join(rootFolder, "package.json"));
    _missingReadmes.push(packageName);
    return;
  }

  const subDirectories = items
    .filter(m => !ignoredFolders.includes(m))
    .map(m => join(rootFolder, m))
    .filter(m => {
      const stat = statSync(m);
      return stat.isDirectory();
    })
    ;

  subDirectories.forEach(m => checkPackageDocs(m));
}

function getPackageName(
  path
) {
  const { name } = JSON.parse(readFileSync(path).toString())
  return name;
}

function getReadmeTitle(
  path
) {
  const lines = readFileSync(path).toString().split(EOL);
  return lines[0]
}

entries.forEach(m => checkPackageDocs(join(__dirname, "..", m)))

const errors = [];
if (_missingReadmes.length > 0) {
  const packages = _missingReadmes.map(m => `\x1b[31m${m}\x1b[0m`).join(", ");
  errors.push(`The following packages are missing the readme file: ${packages}`);
}

if (_wrongReadmes.length > 0) {
  const packages = _wrongReadmes.map(m => `\x1b[31m${m}\x1b[0m`).join(", ");
  errors.push(`The following packages are having wrong readme file: ${packages}`);
}
if (!isSilent) {
  throw errors.join(EOL);
} else {
  console.warn(errors);
}
