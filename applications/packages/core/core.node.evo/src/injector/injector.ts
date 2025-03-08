import { isNil } from "@wraithlight/framework.nullable";
import { cast } from "@wraithlight/framework.type-utils";

export class Injector {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static readonly cache = new Map<string, () => any>();

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
    const factory = this.cache.get(token);
    if (isNil(factory)) {
      throw `No registered object was found for token '${token}'!`;
    }
    const instance = cast<TController>(factory());
    return instance;
  }
}
