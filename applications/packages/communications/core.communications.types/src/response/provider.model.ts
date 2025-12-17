import { Guid } from "@wraithlight/core.guid";
import { IListResult } from "@wraithlight/domain.http.types";

export interface ProviderCreateResponseModel {
  id: Guid;
  label: string;
  config: object;
}

export interface ProviderUpdateResponseModel {
  id: Guid;
  label: string;
  config: object;
  isActive: boolean;
}

export interface ProviderGetResponseModel {
  id: Guid;
  label: string;
  config: object;
  isActive: boolean;
}

export interface ProviderListResponseModel
  // eslint-disable-next-line indent 
  extends IListResult<ProviderGetResponseModel> {
}
