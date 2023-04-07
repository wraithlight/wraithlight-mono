import { Primitive } from "@wraithlight/core.types";
import { EOL } from "os";

import { DbContext } from "../dbcontext";

import { QueryContext } from "./query-context";
import {
    InsertQueryContext as IInsertQueryContext
} from "./query-context.model";

export class InsertQueryContext<T> extends QueryContext<T> implements IInsertQueryContext<T> {

    constructor(
        private readonly _data: T,
        tableName: string,
        private readonly _context: DbContext
    ) {
        super(tableName);
        const query = [
            `INSERT INTO ${this._tableName}`,
            this.getColumns(),
            "VALUES",
            this.getColumnValues()
        ].join(EOL);
        this.addQuery(query);
    }

    public async run(): Promise<void> {
        const command = this.concatQueries();
        return this._context.Connection.execute(command);
    }

    private getColumns(): string {
        const keys = Object.keys(this._data);
        return [
            "(",
            keys.map(m => this.capitalize(m)).join(", "),
            ")"
        ].join("");
    }

    private getColumnValues(): string {
        const values = Object
            .values(this._data)
            .map(m => super.getValueString(m as Primitive))
        ;
        return [
            "(",
            values.join(", "),
            ")"
        ].join("");
    }

}
