import { Nullable, isNil } from "@wraithlight/core.nullable";

export class Dictionary<TValue> {

    private readonly _cache = new Map<string, TValue>();

    public set(key: string, value: TValue): boolean {
        if (this.findInternal(key)) {
            return false;
        }
        this._cache.set(key, value);
        return true;
    }

    public find(key: string): Nullable<TValue> {
        return this.findInternal(key);
    }

    public get(key: string): TValue {
        const result = this.findInternal(key);
        if (isNil(result)) {
            throw `Key '${key}' was not found!`;
        }
        return result!;
    }

    public has(key: string): boolean {
        return this.findInternal(key) !== undefined;
    }

    public remove(key: string): boolean {
        if (this.findInternal(key)) {
            return false;
        }
        this._cache.delete(key);
        return true;
    }

    private findInternal(key: string): Nullable<TValue> {
        return this._cache.get(key);
    }

}
