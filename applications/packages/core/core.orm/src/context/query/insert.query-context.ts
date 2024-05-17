import { EOL } from "os";

import { Nullable } from "@wraithlight/core.nullable";
import { RowDataPacket } from "mysql2";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./_internal";
import {
    InsertQueryContext as IInsertQueryContext
} from "./query-context.model";

export class InsertQueryContext<T extends object>
    extends QueryContext<T>
    implements IInsertQueryContext<T> {

    constructor(
        private readonly _data: T,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        const columns = this.getColumns(this._data);

        const query = [
            `INSERT INTO ${tableName}`,
            `${columns}`,
            `VALUES (${Object.keys(this._data).map(_m => "?")})`
        ].join(EOL);
        this.addQuery(
            query,
            ...Object.values(this._data).map(m => this.getValueString(m))
        );
    }

    public async run(): Promise<Nullable<T>> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(
                command,
                (err, rows, fields) => {
                    console.log("rows", JSON.stringify(rows));
                    console.log("fields", JSON.stringify(fields));
                    if (err) {
                        this._logger.error(
                            "InsertQueryContext",
                            "Error while executing:",
                            `"${JSON.stringify(command)}"`,
                            "ERROR:",
                            err
                        )
                            ;
                        reject(err);
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
