import { Nullable, Primitive } from "@zf/core.types";
import { DbContext } from "../dbcontext";

import { QueryContext } from "./query-context";
import {
    SelectQueryContext as ISelectQueryContext
} from "./query-context.model";

export class SelectQueryContext<T> extends QueryContext<T> implements ISelectQueryContext<T> {

    constructor(
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        this.addQuery(`SELECT * FROM ${tableName}`);
    }

    public where<TKey extends keyof T>(key: TKey, value: T[TKey]): ISelectQueryContext<T> {
        const queryValue = this.getValueString(value as Primitive);
        this.addQuery(`WHERE ${this._tableName}.${this.capitalize(key.toString())} = ${queryValue}`);
        return this;
    }

    public orderByAsc<TKey extends keyof T>(key: TKey): ISelectQueryContext<T> {
        this.orderBy(key.toString(), "ASC");
        return this;
    }

    public orderByDesc<TKey extends keyof T>(key: TKey): ISelectQueryContext<T> {
        this.orderBy(key.toString(), "DESC");
        return this;
    }

    public toList(): Promise<Array<T>> {
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

    private async exec(command: string): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            this._context.Connection.execute(command, (error, rows) => {
                if (error) {
                    reject();
                }
                const rawResult = rows && rows.length && rows.length > 0
                    ? rows
                    : []
                ;
                const result = rawResult.map(m => {
                    const keys = Object.keys(m);
                    const item = {};
                    keys.forEach(o => item[this.decapitalize(o)] = m[o]);
                    return item as T;
                });
                resolve(result);
            });
        });
    }

    private orderBy(key: string, direction: "ASC" | "DESC"): void {
        this.addQuery(`ORDER BY ${this._tableName}.${this.capitalize(key.toString())} ${direction}`);
    }

}
