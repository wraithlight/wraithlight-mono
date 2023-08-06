import { EOL } from "os";
import { Primitive } from "@wraithlight/core.types";

import { QueryContext } from "./_internal";

import {
    UpdateQueryContext as IUpdateQueryContext
} from "./query-context.model";

import { DbContext } from "../dbcontext";

export class UpdateQueryContext<T, TKey extends keyof T>
    extends QueryContext<Partial<T>>
    implements IUpdateQueryContext<T>
{
    constructor(
        key: TKey,
        value: T[TKey],
        data: Partial<T>,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        const query = [
            `UPDATE ${this._tableName} SET`,
            this.getColumnValuePairs(data),
            `WHERE ${this._tableName}.${this.capitalize(key.toString())} = ${this.getValueString(value as Primitive)}`
        ].join(EOL);
        this.addQuery(query);
    }

    public run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(command, (error) => {
                if (error) {
                    this._logger.error("UpdateQueryContext", "Error while executing:", `"${command}"`, "ERROR:", error);
                    reject();
                }
                resolve();
            });
        });
    }

}
