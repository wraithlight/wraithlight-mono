import { DbContext } from "../dbcontext";

import { WhereableQueryContext } from "./_internal";
import {
    DeleteQueryContext as IDeleteQueryContext
} from "./query-context.model"


export class DeleteQueryContext<T extends object>
    extends WhereableQueryContext<T>
    implements IDeleteQueryContext<T> {

    constructor(
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        this.addQuery(`DELETE * FROM ?`, tableName);
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(command, (err) => {
                if (err) {
                    this._logger.error("DeleteQueryContext", "Error while executing:", `"${command}"`, "ERROR:", err);
                    reject(err);
                }
                resolve();
            });
        });
    }

    public where<TKey extends keyof T>(key: TKey, value: T[TKey]): DeleteQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <DeleteQueryContext<T>>super.where(key, value);
    }

    public orderByAsc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <DeleteQueryContext<T>>super.orderByAsc(key);
    }

    public orderByDesc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T> {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <DeleteQueryContext<T>>super.orderByDesc(key);
    }

}