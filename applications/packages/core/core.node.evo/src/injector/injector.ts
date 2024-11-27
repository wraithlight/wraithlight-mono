import { IBaseController } from "../model";

export class Injector {

  private static cache = new Map<string, () => IBaseController>();

  public static setSingleton<T extends IBaseController>(
    factory: () => T,
    injectionName: string
  ): void {
    const instance = factory();
    this.cache.set(injectionName, () => instance);
  }

  public static setMultiton<T extends IBaseController>(
    factory: () => T,
    injectionName: string
  ): void {
    this.cache.set(injectionName, factory);
  }

  public static getInstance<T extends IBaseController>(injectionName: string): T {
    if (!this.cache.has(injectionName)) {
      throw `No controller to be injected with token '${injectionName}'!`;
    }
    const factory = this.cache.get(injectionName)!;
    return factory() as T;
  }

}
