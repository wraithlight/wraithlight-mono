import { Primitive } from "@wraithlight/core.types";
import { EOL } from "os";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./_internal";
import {
    InsertQueryContext as IInsertQueryContext
} from "./query-context.model";

export class InsertQueryContext<T extends Object>
    extends QueryContext<T>
    implements IInsertQueryContext<T> {

    constructor(
        private readonly _data: T,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        const query = [
            `INSERT INTO ${this._tableName}`,
            this.getColumns(this._data),
            "VALUES",
            this.getColumnValues(this._data)
        ].join(EOL);
        this.addQuery(query);
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.execute(command, (err) => {
                if (err) {
                    this._logger.error("InsertQueryContext", "Error while executing:", `"${command}"`, "ERROR:", err);
                    reject(err);
                }
                resolve();
            });
        });
    }

}
