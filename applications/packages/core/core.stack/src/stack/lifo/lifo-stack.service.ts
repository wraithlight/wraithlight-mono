import { Nullable, Predicate } from "@wraithlight/core.types";

export class FifoStackService<T> {

    private readonly _cache: Array<T> = [];

    public set(item: T): void {
        this._cache.push(item);
    }

    public hasAny(): boolean {
        return this._cache.length > 0;
    }

    public find(predicate: Predicate<T, boolean>): Nullable<T> {
        return this._cache.filter(predicate)?.[0] ?? undefined;
    }

    public getNext(): T {
        if (!this.hasAny) {
            throw `No items in the cache!`;
        }
        return this._cache.shift()!;
    }

    public tryGetNext(): Nullable<T> {
        return this._cache.shift();
    }

    public clear(): void {
        this._cache.length = 0;
    }

}
