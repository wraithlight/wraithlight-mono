import { Predicate, predicateDefault } from "@wraithlight/core.linq";

export class ConfigurationReader<TConfig, TCommonConfig> {

    constructor(
        private readonly _config: TConfig,
        private readonly _commonConfig: TCommonConfig
    ) { }

    public get<TResult>(predicate: Predicate<TConfig, TResult>): TResult {
        return predicate(this._config);
    }

    public tryGet<TResult>(predicate: Predicate<TConfig, TResult>, defaultValue: TResult): TResult {
        return predicateDefault(this._config, predicate, defaultValue);
    }

    public getCommon<TResult>(predicate: Predicate<TCommonConfig, TResult>): TResult {
        return predicate(this._commonConfig);
    }

    public tryGetCommon<TResult>(predicate: Predicate<TCommonConfig, TResult>, defaultValue: TResult): TResult {
        return predicateDefault(this._commonConfig, predicate, defaultValue);
    }

}
