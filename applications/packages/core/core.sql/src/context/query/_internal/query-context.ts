import { Primitive } from "@wraithlight/core.types";
import { EOL } from "os";

import { QueryConcatResult } from "./query-context.model";

export abstract class QueryContext<T extends Object> {

    private readonly _queries: Array<string> = [];
    private readonly _queries2: Array<string> = [];
    private readonly _args2: Array<string> = [];

    constructor(
        protected readonly _tableName: string
    ) { }

    /**
     * @deprecated Use `addQuery2()` instead to avoid possible injection attacks.
     */
    protected addQuery(query: string): void {
        this._queries.push(query);
    }

    protected addQuery2(query: string, args?: Array<string>): void {
        this._queries2.push(query);
        if (args) {
            this._args2.push(...args);
        }
    }

    /**
     * @deprecated Use `concatQueries2()` instead to avoid possible injection attacks.
     */
    protected concatQueries(): string {
        return this._queries.join(EOL);
    }

    protected concatQueries2(): QueryConcatResult {
        return {
            query: this._queries2.join(EOL),
            params: this._args2
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
        const keys = Object.keys(data) as Array<keyof T>;
        return keys.map(key => 
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
            .map(m => this.getValueString(m as Primitive))
        ;
        return [
            "(",
            values.join(", "),
            ")"
        ].join("");
    }

}
