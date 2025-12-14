import { CoreHttpClient, HttpCode } from "@wraithlight/core.http";

export class LatencyClient extends CoreHttpClient {

  constructor(
    private readonly _baseUrl = ""
  ) {
    super();
  }

  public async getLatency(
    path: string
  ): Promise<boolean> {
    const url = `${this._baseUrl}${path}`;
    const result = await this.get2(url);
    return result.statusCode === HttpCode.Ok;
  }

}
