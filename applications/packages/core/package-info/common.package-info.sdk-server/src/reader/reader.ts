import { readFileSync } from "fs";

import { ILogger } from "@wraithlight/core.logger.types";

import { PackageJson } from "./reader.model";

export class PackageJsonReader {

    private readonly _content: PackageJson;

    constructor(
        absolutePath: string,
        private readonly _logger: ILogger,
        defaultName = "",
        defaultVersion = ""
    ) {
        this._logger.info(`Reading package.json file at path: '${absolutePath}'`);
        try {
            const rawContent = readFileSync(absolutePath);
            const stringContent = rawContent.toString();
            const jsonContent = JSON.parse(stringContent);
            this._content = jsonContent;
            this._logger.info("package.json file reading finished successfully!");
        } catch (error) {
            this._content = {
                name: defaultName,
                version: defaultVersion
            };
            this._logger.warn("package.json file reading has been failed!", error);
        }
    }

    public getPackageJsonInfo(): PackageJson {
        return this._content;
    }

}
