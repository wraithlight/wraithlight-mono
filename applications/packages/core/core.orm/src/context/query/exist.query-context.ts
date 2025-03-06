import { cast } from "@wraithlight/framework.type-utils";

import { DbContext } from "../dbcontext";

import { BaseSelectQueryContext } from "./base-select.query-context";
import {
  ExistQueryContext as IExistQueryContext,
} from "./query-context.model";

export class ExistQueryContext<T extends object>
  extends BaseSelectQueryContext<T>
  implements IExistQueryContext<T> {

  constructor(
    tableName: string,
    context: DbContext
  ) {
    super(tableName, context);
    this.addQuery(
      `SELECT COUNT(1) FROM ${tableName}`
    );
  }

  public async run(): Promise<boolean> {
    return this._run().then(m => {
      if (m.length === 0) {
        return false;
      }
      if (m.length > 1) {
        throw `Invalid query result in 'ExistQueryContext'!`;
      }
      return Object.values(m[0])[0] > 0;
    });
  }

  public where<TKey extends keyof T>(
    key: TKey,
    value: T[TKey]
  ): ExistQueryContext<T> {
    return cast<ExistQueryContext<T>>(super.where(
      key,
      value
    ));
  }

  public orderByAsc<TKey extends keyof T>(key: TKey): ExistQueryContext<T> {
    return cast<ExistQueryContext<T>>(super.orderByAsc(key));
  }

  public orderByDesc<TKey extends keyof T>(key: TKey): ExistQueryContext<T> {
    return cast<ExistQueryContext<T>>(super.orderByDesc(key));
  }

}
