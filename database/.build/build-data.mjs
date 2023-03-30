import { join } from "path";

import { concatFiles } from "./_concat-files.mjs";
import { DB_CONST } from "./build.const.mjs";

export function buildData(
    dbRootPath
) {
    console.log(" + Building data")
    return concatFiles(
        join(dbRootPath, DB_CONST.dataFolder)
    );
}
