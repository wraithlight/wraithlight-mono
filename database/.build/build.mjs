import { EOL } from "os";
import {
    existsSync,
    mkdirSync,
    writeFileSync
} from "fs";
import { join } from "path";

import { useDatabase } from "./build-db.mjs";
import { buildTables } from "./build-tables.mjs";
import { buildData } from "./build-data.mjs";
import { buildKeys } from "./build-keys.mjs";
import { DB_CONST } from "./build.const.mjs";

export function build(
    rootPathAbsolute,
    databaseName
) {
    const data = [
        useDatabase(databaseName),
        buildTables(rootPathAbsolute),
        buildData(rootPathAbsolute),
        buildKeys(rootPathAbsolute)
    ];
    const content = data.join(EOL);
    const path = join(DB_CONST.distFolder, DB_CONST.distFile);
    if (!existsSync(DB_CONST.distFolder)) {
        mkdirSync(DB_CONST.distFolder);
    }
    writeFileSync(path, content);
}
