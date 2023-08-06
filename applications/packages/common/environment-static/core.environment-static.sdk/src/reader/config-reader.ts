import { Nullable, Predicate, Primitive } from "@wraithlight/core.types";

export class ConfigurationReader<TConfig, TCommonConfig> {

    constructor(
        private readonly _config: TConfig,
        private readonly _commonConfig: TCommonConfig
    ) { }

    public get<TResult>(predicate: Predicate<TConfig, TResult>): TResult {
        return predicate(this._config);
    }

    public tryGet<TResult extends Primitive>(predicate: Predicate<TConfig, Nullable<TResult>>, defaultValue: TResult): TResult {
        return predicate(this._config) ?? defaultValue;
    }

    public getCommon<TResult>(predicate: Predicate<TCommonConfig, TResult>): TResult {
        return predicate(this._commonConfig);
    }

    public tryGetCommon<TResult extends Primitive>(predicate: Predicate<TCommonConfig, Nullable<TResult>>, defaultValue: TResult): TResult {
        return predicate(this._commonConfig) ?? defaultValue;
    }

}
