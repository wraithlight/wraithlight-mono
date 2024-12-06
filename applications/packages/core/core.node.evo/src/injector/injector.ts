export class Injector {

  private static readonly cache = new Map<string, Function>();

  public static registerSingleton<TController>(
    token: string,
    factory: () => TController
  ): void {
    const instance = factory();
    this.cache.set(token, () => instance);
  }

  public static registerMultiton<TController>(
    token: string,
    factory: () => TController
  ): void {
    this.cache.set(token, factory);
  }

  public static getInstance<TController>(
    token: string
  ): TController {
    if (!this.cache.has(token)) {
      throw `No registered object was found for token '${token}'!`;
    }
    const factory = this.cache.get(token)!;
    const instance = factory();
    return instance;
  }
}
