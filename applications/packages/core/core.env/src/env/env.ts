import { EnvironmentType } from "@wraithlight/core.common-constants";

import { WL_ENV_DEFAULT, WL_ENV_TYPE_PROP_NAME } from "./env.const";
import { IEnvironmentPropery } from "./env.model";

export class CoreEnvironment {

    public static getEnvironmentType(): EnvironmentType {
        return this.getStringAsT<EnvironmentType>(
            WL_ENV_TYPE_PROP_NAME,
            WL_ENV_DEFAULT
        )
    }

    public static getStringAsT<T>(
        key: IEnvironmentPropery,
        defaultValue: T
    ): T {
        const result = this.getString(
            key,
            `${defaultValue}`
        );
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return result as T;
    }

    public static getString(
        key: IEnvironmentPropery,
        defaultValue: string
    ): string {
        return this.getFromEnvironment(
            key,
            defaultValue.toString(),
            m => m
        );
    }

    public static getNumber(
        key: IEnvironmentPropery,
        defaultValue: number
    ): number {
        return this.getFromEnvironment(
            key,
            defaultValue.toString(),
            m => Number(m)
        );
    }

    public static getBoolean(
        key: IEnvironmentPropery,
        defaultValue: boolean
    ): boolean {
        return this.getFromEnvironment(
            key,
            defaultValue.toString(),
            m => m.toLowerCase() === true.toString()
        );
    }

    private static getFromEnvironment<T, >(
        key: IEnvironmentPropery,
        defaultValue: string,
        transformer: (value: string) => T
    ): T {
        const processEnv = process.env;
        const value = processEnv[key] ?? defaultValue;
        return transformer(value)
    }
}
