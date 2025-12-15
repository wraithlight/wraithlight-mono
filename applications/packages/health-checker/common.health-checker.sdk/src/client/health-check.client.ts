import { API_TOKEN_HEADER_NAME } from "@wraithlight/core.api-token.constants";
import { HCHealthResultV1Model, HCMetricsResultV1Model } from "@wraithlight/core.health-checker.types";
import { CoreHttpClient } from "@wraithlight/core.http";
import { Nullable } from "@wraithlight/framework.nullable";

export class HealthCheckClient extends CoreHttpClient {

  constructor(
    private readonly _baseUrl: string,
    private readonly _token: string
  ) {
    super();
  }

  protected getHeaders(): HeadersInit {
    return {
      ...this._jsonHeaders,
      [API_TOKEN_HEADER_NAME]: this._token
    };
  }

  public async health(
    path: string
  ): Promise<Nullable<HCHealthResultV1Model>> {
    const url = `${this._baseUrl}${path}`;
    const result = await this.get2<HCHealthResultV1Model>(url);
    return result.payload;
  }

  public async metrics(
    path: string
  ): Promise<Nullable<HCMetricsResultV1Model>> {
    const url = `${this._baseUrl}${path}`;
    const result = await this.get2<HCMetricsResultV1Model>(url);
    return result.payload;
  }

}
