import { EnvironmentType } from "@wraithlight/core.env.types";
import { Primitive } from "@wraithlight/framework.primitive";

import { WL_ENV_DEFAULT, WL_ENV_TYPE_PROP_NAME } from "./env.const";
import { IEnvironment, IEnvironmentContainer, IEnvironmentPropery } from "./env.model";

export class CoreEnvironment {

  /**
   * @deprecated Use local overload instead.
   * @example
   *
   * ```
   *
   * export class AuthEnvironment {
   *   public static getEnvironmentType(): EnvironmentType {
   *     return CoreEnvironment.getStringAsT<EnvironmentType, AuthEnvironment>(KEY, "dev");
   *   }
   * }
   *
   * ```
   */
  public static getEnvironmentType<TEnv extends IEnvironmentContainer>(
  ): EnvironmentType {
    return this.getStringAsT<EnvironmentType, TEnv>(
      WL_ENV_TYPE_PROP_NAME,
      WL_ENV_DEFAULT
    );
  }

  /**
   * @deprecated Use `getComplexV2()`, `getArray()` or `getEnum()` instead.
   */
  public static getStringAsT<T, TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: T
  ): T {
    const result = this.getString(
      key,
      `${defaultValue}`
    );
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return result as T;
  }

  public static getComplexV2<T extends object, TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: T
  ): T {
    const result = this.getFromEnvironment(
      key,
      JSON.stringify(defaultValue),
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      (val: string) => JSON.parse(val) as T
    );
    return result;
  }

  public static getEnum<TEnum extends Primitive, TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: TEnum
  ): TEnum {
    const result = this.getFromEnvironment(
      key,
      defaultValue.toString(),
      (val: string) => {
        switch (typeof defaultValue) {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          case "string": return val as TEnum;
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          case "number": return parseFloat(val) as TEnum;
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          case "boolean": return (val === true.toString()) as TEnum;
          default: return defaultValue;
        }
      }
    );
    return result;
  }

  public static getArray<TArrayItem, TEnv extends IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: ReadonlyArray<TArrayItem> = []
  ): ReadonlyArray<TArrayItem> {
    const result = this.getFromEnvironment(
      key,
      JSON.stringify(defaultValue),
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      (val: string) => JSON.parse(val) as ReadonlyArray<TArrayItem>
    );
    return result;
  }

  public static getString<TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: string
  ): string {
    return this.getFromEnvironment(
      key,
      defaultValue.toString(),
      m => m
    );
  }

  public static getNumber<TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: number
  ): number {
    return this.getFromEnvironment(
      key,
      defaultValue.toString(),
      m => Number(m)
    );
  }

  public static getBoolean<TEnv = IEnvironment>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: boolean
  ): boolean {
    return this.getFromEnvironment(
      key,
      defaultValue.toString(),
      m => m.toLowerCase() === true.toString()
    );
  }

  private static getFromEnvironment<TEnv, T>(
    key: IEnvironmentPropery<TEnv>,
    defaultValue: string,
    transformer: (value: string) => T
  ): T {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const processEnv = process.env as TEnv;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const value = (processEnv[key] ?? defaultValue) as string;
    return transformer(value);
  }
}
