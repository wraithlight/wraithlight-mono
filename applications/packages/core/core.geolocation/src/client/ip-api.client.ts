import { HttpClient } from "@wraithlight/core.http";

import { IpApiClientConfig } from "./ip-api.config";
import { GeolocationInfoModel } from "./ip-api.model";

export class IpApiClient {

    private readonly _httpClient = new HttpClient();
    private readonly _config = new IpApiClientConfig();

    public async getGeolocationInformation(
        ip: string,
        defaultValue: GeolocationInfoModel
    ): Promise<GeolocationInfoModel> {
        return this._httpClient
            .get<GeolocationInfoModel>(this._config.getUrlForIp(ip))
            .then(m => m.payload!)
            .catch(() => defaultValue)
        ;
    }

}
