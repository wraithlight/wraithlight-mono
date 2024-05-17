import { Nullable } from "@wraithlight/core.nullable";
import { RowDataPacket } from "mysql2";

import { DbContext } from "../dbcontext";

import { QueryConcatResult, WhereableQueryContext } from "./_internal";
import {
    SelectQueryContext as ISelectQueryContext,
} from "./query-context.model";

export class SelectQueryContext<T extends object>
    extends WhereableQueryContext<T>
    implements ISelectQueryContext<T> {

    constructor(
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        this.addQuery(
            `SELECT * FROM ${tableName}`
        );
    }

    public async toList(): Promise<Array<T>> {
        const command = this.concatQueries();
        return this.exec(command);
    }

    public async first(): Promise<Nullable<T>> {
        const command = this.concatQueries();
        return this.exec(command).then(m => {
            return m.length > 0
                ? m[0]
                : undefined
            ;
        });
    }

    public where<TKey extends keyof T>(
        key: TKey,
        value: T[TKey]
    ): SelectQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <SelectQueryContext<T>>super.where(
            key,
            value
        );
    }

    public orderByAsc<TKey extends keyof T>(key: TKey): SelectQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <SelectQueryContext<T>>super.orderByAsc(key);
    }

    public orderByDesc<TKey extends keyof T>(key: TKey): SelectQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <SelectQueryContext<T>>super.orderByDesc(key);
    }

    private async exec(command: QueryConcatResult): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            this._context.Connection.query(
                command,
                (error, rows) => {
                    if (error) {
                        this._logger.error(
                            "SelectQueryContext",
                            "Error while executing:",
                            `"${JSON.stringify(command)}"`,
                            "ERROR:",
                            error
                        )
                    ;
                    reject(error);
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
                resolve(result);
            });
        });
    }

}
