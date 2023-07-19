import { Nullable, Predicate, Primitive } from "@wraithlight/core.types";

export class ConfigurationReader<TConfig> {

    constructor(
        private readonly _config: TConfig
    ) { }

    public get<TResult>(predicate: Predicate<TConfig, TResult>): TResult {
        return predicate(this._config);
    }

    public tryGet<TResult extends Primitive>(predicate: Predicate<TConfig, Nullable<TResult>>, defaultValue: TResult): TResult {
        return predicate(this._config) ?? defaultValue;
    }

}
