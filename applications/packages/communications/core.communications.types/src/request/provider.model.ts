export interface ProviderCreateRequestModel {
  label: string;
  config: object;
}

export interface ProviderUpdateRequestModel {
  label?: string;
  config?: object;
  isActive?: boolean;
}
