import { EnvironmentType } from "@wraithlight/core.common-constants";

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
