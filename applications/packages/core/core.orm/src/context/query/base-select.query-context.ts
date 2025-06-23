import { GLOBAL_UNDEFINED} from "@wraithlight/core.undefined";
import { cast } from "@wraithlight/framework.type-utils";
import { RowDataPacket } from "mysql2";

import { DbContext } from "../dbcontext";

import { QueryConcatResult, WhereableQueryContext } from "./_internal";

const DATETIME_FIELD_TYPE = 12;

export class BaseSelectQueryContext<T extends object>
  extends WhereableQueryContext<T> {

  constructor(
    tableName: string,
    private readonly _context: DbContext
  ) {
    super(tableName);
  }

  protected async _run(): Promise<ReadonlyArray<T>> {
    const command = super.concatQueries();
    return this.exec(command);
  }

  private async exec(command: QueryConcatResult): Promise<Array<T>> {
    return new Promise((resolve, reject) => {
      this._context.Connection.query(
        command,
        (error, rows, fields) => {
          if (error) {
            this._logger.error(
              "BaseSelectQueryContext",
              "Error while executing:",
              `"${JSON.stringify(command)}"`,
              "ERROR:",
              error
            )
              ;
            reject(error);
          }

          // eslint-disable-next-line max-len
          const rawResult = rows && Array.isArray(rows) && rows.length && rows.length > 0
            ? rows
            : []
            ;
          const result = rawResult.map(m => {
            const keys = Object.keys(m);


            const item: { [index: string]: any } = {};
            for (const key of keys) {
              // eslint-disable-next-line max-len
              const field = fields?.find(o => o.name === key) ?? { type: 253, name: "NA" };
              const lowercaseKey = this.decapitalize(key);

              let value;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const rawValue = cast<RowDataPacket>(m)[key];
              switch (field.type) {
                // eslint-disable-next-line max-len
                case DATETIME_FIELD_TYPE: value = rawValue ? new Date(rawValue) : GLOBAL_UNDEFINED; break;
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                default: value = rawValue; break;
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              item[lowercaseKey] = value;
            }
            return cast<T>(item);
          });
          resolve(result);
        });
    });
  }

}
