import { EOL } from "os";

import { LoggerService } from "@wraithlight/common.logger.sdk";
import { Primitive } from "@wraithlight/framework.primitive";

import { QueryConcatResult } from "./query-context.model";

export abstract class QueryContext<T extends object> {

    private readonly _queries: Array<string> = [];
    private readonly _queries2: Array<string> = [];
    private readonly _args2: Array<string> = [];

    protected readonly _logger = LoggerService.getInstance();

    constructor(
        protected readonly _tableName: string
    ) { }

    protected addQuery(query: string, ...args: Array<string>): void {
        this._queries2.push(query);
        if (args) {
            this._args2.push(...args);
        }
    }

    protected concatQueries(): QueryConcatResult {
        return {
            sql: this._queries2.join(' '),
            values: this._args2
        };
    }

    protected capitalize(value: string): string {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    }

    protected decapitalize(value: string): string {
        return `${value.charAt(0).toLowerCase()}${value.slice(1)}`;
    }

    protected getValueString(value: Primitive): string {
      switch(typeof value) {
        case "number": return value.toString();
        case "boolean": return value.toString();
        default: return `"${value}"`;
      }
    }

    protected getColumnValuePairs(data: T): string {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const keys = Object.keys(data) as Array<keyof T>;
        return keys.map(key =>
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            `${this._tableName}.${this.capitalize(key.toString())} = ${this.getValueString(data[key] as Primitive)}`
        ).join(`,${EOL}`);
    }

    protected getColumns(data: T): string {
        const keys = Object.keys(data);
        return [
            "(",
            keys.map(m => this.capitalize(m)).join(", "),
            ")"
        ].join("");
    }

    protected getColumnValues(data: T): string {
        const values = Object
            .values(data)
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            .map(m => this.getValueString(m as Primitive))
        ;
        return [
            "(",
            values.join(", "),
            ")"
        ].join("");
    }

}
