import { ApiModel } from "./_shared/common-api.model";

export interface CommonModel {
    isProduction: boolean;
    auth: {
        address: ApiModel;
    }
}
