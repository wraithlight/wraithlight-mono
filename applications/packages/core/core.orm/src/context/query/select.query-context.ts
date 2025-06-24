import { GLOBAL_UNDEFINED} from "@wraithlight/core.undefined";
import { Nullable } from "@wraithlight/framework.nullable";
import { cast } from "@wraithlight/framework.type-utils";

import { DbContext } from "../dbcontext";

import { BaseSelectQueryContext } from "./base-select.query-context";
import {
  SelectQueryContext as ISelectQueryContext
} from "./query-context.model";

export class SelectQueryContext<T extends object>
  extends BaseSelectQueryContext<T>
  implements ISelectQueryContext<T> {

  constructor(
    tableName: string,
    context: DbContext
  ) {
    super(tableName, context);
    this.addQuery(
      `SELECT * FROM ${tableName}`
    );
  }

  public async toList(): Promise<ReadonlyArray<T>> {
    return this._run();
  }

  public async first(): Promise<Nullable<T>> {
    return this._run().then(m => {
      return m.length > 0
        ? m[0]
        : GLOBAL_UNDEFINED
        ;
    });
  }

  public where<TKey extends keyof T>(
    key: TKey,
    value: T[TKey]
  ): SelectQueryContext<T> {
    return cast<SelectQueryContext<T>>(super.where(
      key,
      value
    ));
  }

  public orderByAsc<TKey extends keyof T>(key: TKey): SelectQueryContext<T> {
    return cast<SelectQueryContext<T>>(super.orderByAsc(key));
  }

  public orderByDesc<TKey extends keyof T>(key: TKey): SelectQueryContext<T> {
    return cast<SelectQueryContext<T>>(super.orderByDesc(key));
  }

  public skip(amount: number): SelectQueryContext<T> {
    return cast<SelectQueryContext<T>>(super.skip(amount));
  }

  public take(amount: number): SelectQueryContext<T> {
    return cast<SelectQueryContext<T>>(super.take(amount));
  }

}
