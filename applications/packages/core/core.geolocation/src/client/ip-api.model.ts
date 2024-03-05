import { IP_API_PARAMS } from "./ip-api.const";

export interface GeolocationInfoModel<T> {
    [IP_API_PARAMS.fields]: T
}
