import { WhereableQueryContext } from "./_internal";
import {
    DeleteQueryContext as IDeleteQueryContext
} from "./query-context.model"

import { DbContext } from "../dbcontext";

export class DeleteQueryContext<T>
    extends WhereableQueryContext<T>
    implements IDeleteQueryContext<T> {

    
    constructor(
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        this.addQuery(`DELETE * FROM ${tableName}`);
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.execute(command, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    public where<TKey extends keyof T>(key: TKey, value: T[TKey]): DeleteQueryContext<T> {
        return <DeleteQueryContext<T>>super.where(key, value);
    }

    public orderByAsc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T> {
        return <DeleteQueryContext<T>>super.orderByAsc(key);
    }

    public orderByDesc<TKey extends keyof T>(key: TKey): DeleteQueryContext<T> {
        return <DeleteQueryContext<T>>super.orderByDesc(key);
    }

}