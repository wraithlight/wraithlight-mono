import { Primitive } from "@wraithlight/core.primitive";

import { QueryContext } from "./query-context";

import {
    WhereableQueryContext as IWhereableQueryContext
} from "../query-context.model";

export abstract class WhereableQueryContext<T extends object>
    extends QueryContext<T>
    implements IWhereableQueryContext<T> {

    private lastWasWhere = false;

    public where<TKey extends keyof T>(key: TKey, value: T[TKey]): IWhereableQueryContext<T> {
        const queryValue = this.getValueString(value as Primitive);
        if (this.lastWasWhere) {
            this.addQuery("AND");
        } else {
            this.addQuery("WHERE");
        }
        this.addQuery(`? = ?`, `${this._tableName}.${this.capitalize(key.toString())}`, queryValue);
        this.lastWasWhere = true;
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
        this.addQuery(`ORDER BY ? ?`, `${this._tableName}.${this.capitalize(key.toString())}`, direction);
    }

}
