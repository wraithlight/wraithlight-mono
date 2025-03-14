import { Dictionary } from "@wraithlight/framework.dictionary";

export class Counter {

  private _value = 0;
  private static readonly _cache = new Dictionary<Counter>();

  private constructor(
    initialValue: number,
    private readonly _step: number
  ) {
    this._value = initialValue;
  }

  public static getInstance(
    name: string,
    initialValue = 0,
    step = 1
  ): Counter {
    if (!this._cache.has(name)) {
      this._cache.set(
        name,
        new Counter(
          initialValue,
          step
        )
      );
    }
    return this._cache.get(name);
  }

  public increment(): void {
    this.incrementInternal();
  }

  public getNext(): number {
    this.incrementInternal();
    return this._value;
  }

  private incrementInternal(): void {
    this._value += this._step;
  }

}
