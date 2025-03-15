import { cast } from "@wraithlight/framework.type-utils";

import { DbContext } from "../dbcontext";

import { BaseSelectQueryContext } from "./base-select.query-context";
import {
  CountQueryContext as ICountQueryContext,
} from "./query-context.model";

export class CountQueryContext<T extends object>
  extends BaseSelectQueryContext<T>
  implements ICountQueryContext<T> {

  constructor(
    tableName: string,
    context: DbContext
  ) {
    super(tableName, context);
    this.addQuery(
      `SELECT COUNT(*) FROM ${tableName}`
    );
  }

  public async run(): Promise<number> {
    return this._run().then(m => {
      return Object.values(m[0])[0];
    });
  }

  public where<TKey extends keyof T>(
    key: TKey,
    value: T[TKey]
  ): CountQueryContext<T> {
    return cast<CountQueryContext<T>>(super.where(
      key,
      value
    ));
  }

  public orderByAsc<TKey extends keyof T>(key: TKey): CountQueryContext<T> {
    return cast<CountQueryContext<T>>(super.orderByAsc(key));
  }

  public orderByDesc<TKey extends keyof T>(key: TKey): CountQueryContext<T> {
    return cast<CountQueryContext<T>>(super.orderByDesc(key));
  }

}
