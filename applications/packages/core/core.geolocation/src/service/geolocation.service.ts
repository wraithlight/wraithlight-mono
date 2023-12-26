import { CountryCode } from "@wraithlight/core.country.constants";

import { IpApiClient } from "../client";

import { DEFAULT_COUNTRY_CODE } from "./geolocation.const";

export class GeolocationService {

    private readonly _ipApiClient = new IpApiClient();

    public async getGeolocationCountryCode(
        ip: string,
        defaultCountry: CountryCode = DEFAULT_COUNTRY_CODE
    ): Promise<CountryCode> {
        return this.getGeolocationInfo(ip, defaultCountry);
    }

    private async getGeolocationInfo(ip: string, defaultCountry: CountryCode): Promise<CountryCode> {
        return this._ipApiClient
            .getGeolocationInformation(ip, {
                countryCode: defaultCountry
            })
            .then(m => m.countryCode as CountryCode)
        ;
    }

}
