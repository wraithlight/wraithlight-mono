import { HttpClient } from "@wraithlight/core.http";
import { isNil } from "@wraithlight/core.nullable";

import { IpApiClientConfig } from "./ip-api.config";
import { GeolocationInfoModel } from "./ip-api.model";

export class IpApiClient {

    private readonly _httpClient = new HttpClient();
    private readonly _config = new IpApiClientConfig();

    public async getGeolocationInformation<T>(
        ip: string,
        defaultValue: GeolocationInfoModel<T>
    ): Promise<GeolocationInfoModel<T>> {
        return this._httpClient
            .get<GeolocationInfoModel<T>>(this._config.getUrlForIp(ip))
            .then(m => isNil(m.payload) ? defaultValue : m.payload)
            .catch(() => defaultValue)
        ;
    }

}
