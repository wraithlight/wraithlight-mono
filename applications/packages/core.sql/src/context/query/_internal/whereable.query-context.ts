import { Primitive } from "@wraithlight/core.types";

import { QueryContext } from "./query-context";

import {
    WhereableQueryContext as IWhereableQueryContext
} from "../query-context.model";

export abstract class WhereableQueryContext<T>
    extends QueryContext<T>
    implements IWhereableQueryContext<T> {

    public where<TKey extends keyof T>(key: TKey, value: T[TKey]): IWhereableQueryContext<T> {
        const queryValue = this.getValueString(value as Primitive);
        this.addQuery(`WHERE ${this._tableName}.${this.capitalize(key.toString())} = ${queryValue}`);
        return this;
    }

    public orderByAsc<TKey extends keyof T>(key: TKey): IWhereableQueryContext<T> {
        this.orderBy(key.toString(), "ASC");
        return this;
    }

    public orderByDesc<TKey extends keyof T>(key: TKey): IWhereableQueryContext<T> {
        this.orderBy(key.toString(), "DESC");
        return this;
    }

    private orderBy(key: string, direction: "ASC" | "DESC"): void {
        this.addQuery(`ORDER BY ${this._tableName}.${this.capitalize(key.toString())} ${direction}`);
    }

}
