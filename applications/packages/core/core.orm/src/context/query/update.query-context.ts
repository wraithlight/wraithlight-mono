import { EOL } from "os";

import { Primitive } from "@wraithlight/core.primitive";
import { Nullable } from "@wraithlight/core.nullable";
import { RowDataPacket } from "mysql2";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./_internal";
import {
    UpdateQueryContext as IUpdateQueryContext
} from "./query-context.model";


export class UpdateQueryContext<T, TKey extends keyof T>
    extends QueryContext<Partial<T>>
    implements IUpdateQueryContext<T> {
    constructor(
        key: TKey,
        value: T[TKey],
        data: Partial<T>,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        const query = [
            `UPDATE ${tableName}`,
            `SET`,
            `?`,
            `WHERE ? = ?`
        ].join(EOL);
        this.addQuery(
            query,
            this.getColumnValuePairs(data),
            `${this._tableName}.${this.capitalize(key.toString())}`,
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            this.getValueString(value as Primitive)
        );
    }

    public async run(): Promise<Nullable<T>> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(
                command,
                (error, rows) => {
                    if (error) {
                        this._logger.error(
                            "UpdateQueryContext",
                            "Error while executing:",
                            `"${JSON.stringify(command)}"`,
                            "ERROR:",
                            error
                        )
                            ;
                        reject();
                    }
                    // eslint-disable-next-line max-len
                    const rawResult = rows && Array.isArray(rows) && rows.length && rows.length > 0
                        ? rows
                        : []
                        ;
                    const result = rawResult.map(m => {
                        const keys = Object.keys(m);
                        const item: { [index: string]: any } = {};
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, max-len
                        keys.forEach(o => item[this.decapitalize(o)] = (m as RowDataPacket)[o]);
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        return item as T;
                    });
                    resolve(result[0] ?? undefined);
                });
        });
    }

}
