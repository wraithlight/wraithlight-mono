import { Nullable, isNil } from "@wraithlight/framework.nullable";

/**
 * @deprecated Use `Dictionary` from `"@wraithlight/framework.dictionary"` instead.
 */
export class Dictionary<TValue> {

  private readonly _cache = new Map<string, TValue>();

  public set(key: string, value: TValue): boolean {
    if (this.findInternal(key)) {
      return false;
    }
    this._cache.set(
      key,
      value
    );
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
    return result;
  }

  public has(key: string): boolean {
    return !isNil(this.findInternal(key));
  }

  public remove(key: string): boolean {
    if (this.findInternal(key)) {
      return false;
    }
    this._cache.delete(key);
    return true;
  }

  public reset(): void {
    this._cache.clear();
  }

  private findInternal(key: string): Nullable<TValue> {
    return this._cache.get(key);
  }

}
