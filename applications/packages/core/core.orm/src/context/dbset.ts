import { DbContext } from "./dbcontext";
import {
    SelectQueryContext as ISelectQueryContext,
    InsertQueryContext as IInsertQueryContext,
    UpdateQueryContext as IUpdateQueryContext,
    DeleteQueryContext as IDeleteQueryContext
} from "./query/query-context.model";
import { SelectQueryContext } from "./query/select.query-context";
import { InsertQueryContext } from "./query/insert.query-context";
import { UpdateQueryContext } from "./query/update.query-context";
import { DeleteQueryContext } from "./query/delete.query-context";

export class DbSet<T extends object> {

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

    public delete(): IDeleteQueryContext<T> {
        return new DeleteQueryContext<T>(this._tableName, this._context);
    }

}
