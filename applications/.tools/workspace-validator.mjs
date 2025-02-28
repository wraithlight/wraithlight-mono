import { detectProjects } from "lerna/utils";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const requiredFiles = [
  "README.md",
  // ".gitignore",  // TODO: https://github.com/wraithlight/wraithlight-mono/issues/1175
  // ".npmignore",  // TODO: https://github.com/wraithlight/wraithlight-mono/issues/1082
  // ".npmrc",      // TODO: https://github.com/wraithlight/wraithlight-mono/issues/1178
  ".eslintrc.cjs",
  "jest.config.js",
  "package.json",
  "tsconfig.build.json",
  "tsconfig.json",
];

const silentModeSwitch = "--silent";

const isSilentRun = process.argv.includes(silentModeSwitch);

async function getProjectsMap() {
  const result = await detectProjects();
  const map = Object.values(result.projectGraph.nodes).map(m => ({
    name: m.name,
    location: m.package.location
  }));
  return map;
}

function getFilesFromDirectory(path) {
  return readdirSync(path).filter(m => !statSync(join(path, m)).isDirectory());
}

function getOnlyLeftItems(
  left,
  right
) {
  return left.filter(m => !right.includes(m));
}

async function checkFileStructure() {
  const errors = [];
  const projectMap = await getProjectsMap();
  for (const project of projectMap) {
    const files = getFilesFromDirectory(project.location);
    const missingFiles = getOnlyLeftItems(requiredFiles, files);
    if (missingFiles.length > 0) {
      errors.push(`${project.name} - ${missingFiles.join()}`);
    }
  }
  console.log(errors);
  if (!isSilentRun) {
    throw `There are missing files in ${errors.length} package(s)!`;
  }
  process.exit();
}

checkFileStructure();
