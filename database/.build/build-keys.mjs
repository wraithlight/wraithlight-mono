import { join } from "path";

import { concatFiles } from "./_concat-files.mjs";
import { DB_CONST } from "./build.const.mjs";

export function buildKeys(
    dbRootPath
) {
    console.log(" + Building keys")
    return concatFiles(
        join(dbRootPath, DB_CONST.tablesFolder)
    );
}
