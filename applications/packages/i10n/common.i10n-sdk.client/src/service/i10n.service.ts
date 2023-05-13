import { Dictionary, Nullable } from "@wraithlight/core.types";

export class I10NService {

    private static _instance: Nullable<I10NService>;

    private constructor(
        private readonly _dictionary: Dictionary<string>
    ) { }

    public static initialize(dictionary: Dictionary<string>): I10NService {
        if (!this._instance) {
            this._instance = new I10NService(dictionary);
        }
        return this._instance;
    }

    public static getInstance(): I10NService {
        if (!this._instance) {
            throw `The service has not been initialized!`;
        }
        return this._instance;
    }

    public translate(key: string): string {
        const value = this._dictionary.find(key);
        if (!value) {
            return key;
        }
        return value;
    }

}
