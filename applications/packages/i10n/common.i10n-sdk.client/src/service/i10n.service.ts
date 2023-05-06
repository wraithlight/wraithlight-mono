import { Dictionary } from "@wraithlight/core.types";

export class I10NService {

    constructor(
        private readonly _dictionary: Dictionary<string>
    ) { }

    public translate(key: string): string {
        const value = this._dictionary.find(key);
        if (!value) {
            return key;
        }
        return value;
    }

}
