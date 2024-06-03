import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';

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

const separator = "#"
const throwError = (process.argv[2] || "") === "--silent"

const _dependencies = {}

function lookForPackageJsonRecursively(
    rootFolder
) {
    const items = readdirSync(rootFolder)
    for (const item of items) {
        const path = join(rootFolder, item)
        const stat = statSync(path)
        if (stat.isFile() && item === "package.json") {
            readPackageJsonFile(path)
        }
        if (stat.isDirectory() && !ignoredFolders.includes(item)) {
            lookForPackageJsonRecursively(path)
        }
    }
}

function readPackageJsonFile(
    path
) {
    const {
        name,
        dependencies,
        devDependencies,
        peerDependencies
    } = JSON.parse(readFileSync(path).toString())
    _dependencies[name] = {
        dependencies,
        devDependencies,
        peerDependencies,
    }
}

function listByPredicate(object, predicate) {
    const array = Object.values(object)
        .map(m => predicate(m))
        .filter(m => m !== undefined)
        .filter(m => Object.keys(m).length > 0)
        .map(m => Object.entries(m).map(o => `${o[0]}${separator}${o[1]}`))
        .flat()
        .filter(m => !m.startsWith("@wraithlight"))
        .sort()
    ;
    return new Set(array)
}

function checkDuplicates(set) {
    const arr = Array.from(set)
    const items = arr.map(m => m.split(separator))
    const keys = items.map(m => m[0])
    keys.forEach((m, i) => {
        if (keys.indexOf(m) !== i) {
            const versions = items.filter(o => o[0] === m).map(o => o[1])
            const message = `Multiple version found on the same package! '${m}', '${versions.join(', ')}'`
            console.error(message)
            if (!throwError) throw message
        }
    })
}

entries.forEach(m => lookForPackageJsonRecursively(join(__dirname, m)))

checkDuplicates(listByPredicate(_dependencies, m => m.dependencies))
checkDuplicates(listByPredicate(_dependencies, m => m.devDependencies))
checkDuplicates(listByPredicate(_dependencies, m => m.peerDependencies))
