import { EOL } from "os";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./_internal";
import {
    InsertQueryContext as IInsertQueryContext
} from "./query-context.model";

export class InsertQueryContext<T extends object>
    extends QueryContext<T>
    implements IInsertQueryContext {

    constructor(
        private readonly _data: T,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);

        const values = this.getColumnValues(this._data);

        const query = [
            `INSERT INTO ${this._tableName} (`,
            this.getColumns(this._data).join(", "),
            `) VALUES (${values.map(_ => "?")})`
        ].join(EOL);
        this.addQuery(
            query,
            ...values
        );
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return new Promise((resolve, reject) => {
            this._context.Connection.query(
                command,
                (err) => {
                    if (err) {
                        this._logger.error(
                            "InsertQueryContext",
                            "Error while executing:",
                            `"${JSON.stringify(command)}"`,
                            "ERROR:",
                            err
                        )
                      ;
                      reject(err);
                  }
                resolve();
            });
        });
    }

}
