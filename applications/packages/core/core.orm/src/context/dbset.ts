import { DbContext } from "./dbcontext";
import { CountQueryContext } from "./query/count.query-context";
import { DeleteQueryContext } from "./query/delete.query-context";
import { ExistQueryContext } from "./query/exist.query-context";
import { InsertQueryContext } from "./query/insert.query-context";
import {
  CountQueryContext as ICountQueryContext,
  DeleteQueryContext as IDeleteQueryContext,
  ExistQueryContext as IExistQueryContext,
  InsertQueryContext as IInsertQueryContext,
  SelectQueryContext as ISelectQueryContext,
  UpdateQueryContext as IUpdateQueryContext,
} from "./query/query-context.model";
import { SelectQueryContext } from "./query/select.query-context";
import { UpdateQueryContext } from "./query/update.query-context";

export class DbSet<T extends object> {

  constructor(
    private readonly _context: DbContext,
    private readonly _tableName: string
  ) { }

  public select(): ISelectQueryContext<T> {
    return new SelectQueryContext<T>(
      this._tableName,
      this._context
    );
  }

  public count(): ICountQueryContext<T> {
    return new CountQueryContext<T>(
      this._tableName,
      this._context
    );
  }

  public exist(): IExistQueryContext<T> {
    return new ExistQueryContext<T>(
      this._tableName,
      this._context
    );
  }

  public insert(entity: T): IInsertQueryContext {
    return new InsertQueryContext<T>(
      entity,
      this._tableName,
      this._context
    );
  }

  public update<TKey extends keyof T>(
    key: TKey,
    value: T[TKey],
    entity: Partial<T>
  ): IUpdateQueryContext {
    return new UpdateQueryContext<T, TKey>(
      key,
      value,
      entity,
      this._tableName,
      this._context
    );
  }

  public delete(): IDeleteQueryContext<T> {
    return new DeleteQueryContext<T>(
      this._tableName,
      this._context
    );
  }

}
