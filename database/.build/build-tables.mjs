import { join } from "path";

import { concatFiles } from "./_concat-files.mjs";
import { DB_CONST } from "./build.const.mjs";

export function buildTables(
    dbRootPath
) {
    console.log(" + Building tables")
    return concatFiles(
        join(dbRootPath, DB_CONST.tablesFolder)
    );
}
