/**
 * This scripts was originally used to generate `staging` and `production` configuration files.
 * Usage: Paste the script to /src/configuration, then run it from node
 * The *.config.ts file should be updated manually.
 */

import { readdirSync, readFileSync, cpSync, writeFileSync, renameSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folders = readdirSync(__dirname).filter(m => statSync(join(__dirname, m)).isDirectory());
const envs = [
    "dev",
    "local",
    "test",
    "staging",
    "production"
];

for(const folder of folders) {
    const subFolders = readdirSync(join(__dirname, folder)).filter(m => statSync(join(__dirname, folder, m)).isDirectory());
    for(const env of envs) {
        if(!subFolders.includes(env)) {
            cpSync(join(__dirname, folder, "dev"), join(__dirname, folder, env), {recursive: true});
            const index = readFileSync(join(__dirname, folder, env, "index.ts"))
                .toString()
                .replace("dev", env)
            ;
            writeFileSync(join(__dirname, folder, env, "index.ts"), index);
            const content = readdirSync(join(__dirname, folder, env)).filter(m => m !== "index.ts");
            renameSync(join(__dirname, folder, env, content[0]), join(__dirname, folder, env, content[0]).replace("dev", env));
            const dataFile = readFileSync(join(__dirname, folder, env, content[0]).replace("dev", env))
                .toString()
                .replace("dev".toUpperCase(), env.toUpperCase())
            ;
            writeFileSync(join(__dirname, folder, env, content[0]).replace("dev", env), dataFile);
        }
    }
}
