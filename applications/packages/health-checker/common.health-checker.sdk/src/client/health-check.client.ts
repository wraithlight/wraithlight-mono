import { HCHealthResultV1Model, HCMetricsResultV1Model } from "@wraithlight/core.health-checker.types";
import { CoreHttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/core.nullable";

export class HealthCheckClient extends CoreHttpClient {

    constructor(
        private readonly _baseUrl: string,
    ) {
        super();
    }

    public async health(
        path: string
    ): Promise<Nullable<HCHealthResultV1Model>> {
        const url = `${this._baseUrl}${path}`;
        const result = await this.get<HCHealthResultV1Model>(url);
        return result.payload;
    }

    public async metrics(
        path: string
    ): Promise<Nullable<HCMetricsResultV1Model>> {
        const url = `${this._baseUrl}${path}`;
        const result = await this.get<HCMetricsResultV1Model>(url);
        return result.payload;
    }

}
