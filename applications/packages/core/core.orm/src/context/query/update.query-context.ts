import { EOL } from "os";

import { Primitive } from "@wraithlight/core.primitive";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./_internal";
import {
    UpdateQueryContext as IUpdateQueryContext
} from "./query-context.model";


export class UpdateQueryContext<T, TKey extends keyof T>
    extends QueryContext<Partial<T>>
    implements IUpdateQueryContext
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
            `UPDATE ?`,
            `SET`,
            `?`,
            `WHERE ? = ?`
        ].join(EOL);
        this.addQuery(
            query,
            this._tableName,
            this.getColumnValuePairs(data),
            `${this._tableName}.${this.capitalize(key.toString())}`,
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            this.getValueString(value as Primitive)
        );
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(
                command,
                (error) => {
                    if (error) {
                        this._logger.error(
                            "UpdateQueryContext",
                            "Error while executing:",
                            `"${command}"`,
                            "ERROR:",
                            error
                        )
                    ;
                    reject();
                }
                resolve();
            });
        });
    }

}
