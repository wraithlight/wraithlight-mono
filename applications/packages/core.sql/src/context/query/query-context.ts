import { Primitive } from "@wraithlight/core.types";
import { EOL } from "os";

export abstract class QueryContext<T> {

    private readonly _queries: Array<string> = [];

    constructor(
        protected readonly _tableName: string
    ) { }

    protected addQuery(query: string): void {
        this._queries.push(query);
    }

    protected concatQueries(): string {
        return this._queries.join(EOL);
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

}
