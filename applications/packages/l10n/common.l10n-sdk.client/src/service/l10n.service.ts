import { Dictionary } from "@wraithlight/core.dictionary";
import { Nullable } from "@wraithlight/core.nullable";

export class L10NService {

    private static _instance: Nullable<L10NService>;

    private constructor(
        private readonly _dictionary: Dictionary<string>
    ) { }

    public static initialize(dictionary: Dictionary<string>): L10NService {
        if (!this._instance) {
            this._instance = new L10NService(dictionary);
        }
        return this._instance;
    }

    public static getInstance(): L10NService {
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
