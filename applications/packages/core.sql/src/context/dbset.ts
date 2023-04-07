import { DbContext } from "./dbcontext";
import { SelectQueryContext } from "./query/select.query-context";
import {
    SelectQueryContext as ISelectQueryContext,
    InsertQueryContext as IInsertQueryContext
} from "./query/query-context.model";
import { InsertQueryContext } from "./query/insert.query-context";

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

}
