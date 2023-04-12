import { DbContext } from "./dbcontext";
import { SelectQueryContext } from "./query/select.query-context";
import {
    SelectQueryContext as ISelectQueryContext,
    InsertQueryContext as IInsertQueryContext,
    UpdateQueryContext as IUpdateQueryContext
} from "./query/query-context.model";
import { InsertQueryContext } from "./query/insert.query-context";
import { UpdateQueryContext } from "./query/update.query-context";

export class DbSet<T> {

    constructor(
        private readonly _context: DbContext,
        private readonly _tableName: string
    ) { }

    public select(): ISelectQueryContext<T> {
        return new SelectQueryContext<T>(this._tableName, this._context);
    }

    public insert(entity: T): IInsertQueryContext<T> {
        return new InsertQueryContext<T>(entity, this._tableName, this._context);
    }

    public update<TKey extends keyof T>(key: TKey, value: T[TKey], entity: Partial<T>): IUpdateQueryContext<T> {
        return new UpdateQueryContext<T, TKey>(key, value, entity, this._tableName, this._context);
    }

}
