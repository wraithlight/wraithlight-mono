import { Predicate } from "@wraithlight/core.linq";
import { Nullable, isNil } from "@wraithlight/framework.nullable";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

export class FifoStackService<T> {

  private readonly _cache: Array<T> = [];

  public set(item: T): void {
    this._cache.push(item);
  }

  public hasAny(): boolean {
    return this._cache.length > 0;
  }

  public find(predicate: Predicate<T, boolean>): Nullable<T> {
    return this._cache.filter(predicate)?.[0] ?? GLOBAL_UNDEFINED;
  }

  public getNext(): T {
    const next = this._cache.shift();
    if (isNil(next)) {
      throw `No items in the cache!`;
    }
    return next;
  }

  public tryGetNext(): Nullable<T> {
    return this._cache.shift();
  }

  public clear(): void {
    this._cache.length = 0;
  }

}
