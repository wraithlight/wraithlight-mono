import { API_TOKEN_HEADER_NAME } from "@wraithlight/core.api-token.constants";
import {
  ContentAppLocalizationResponseModel,
  ContentSingleKeyResponseModel
} from "@wraithlight/core.content.types";
import {
  CoreHttpClient
} from "@wraithlight/core.http";
import { GLOBAL_UNDEFINED } from "@wraithlight/core.undefined";
import { Nullable } from "@wraithlight/framework.nullable";

export class ContentClient extends CoreHttpClient {

  constructor(
    private readonly _contentApiBaseUrl: string,
    private readonly _contentApiKey: string
  ) {
    super();
  }

  protected getHeaders(): HeadersInit {
    const defaultHeaders = this._jsonHeaders;
    return {
      ...defaultHeaders,
      [API_TOKEN_HEADER_NAME]: this._contentApiKey      // TODO: Align once core.api-token.constants lib is ready.
    };
  }

  public async fetchSingle(
    path: string
  ): Promise<Nullable<ContentSingleKeyResponseModel>> {
    const url = `${this._contentApiBaseUrl}${path}`;
    return this.get<ContentSingleKeyResponseModel>(url)
      .then(m => m.payload)
      .catch(GLOBAL_UNDEFINED)
      ;
  }

  public async fetchMulti(
    path: string
  ): Promise<Nullable<ContentAppLocalizationResponseModel>> {
    const url = `${this._contentApiBaseUrl}${path}`;
    return this.get<ContentAppLocalizationResponseModel>(url)
      .then(m => m.payload)
      .catch(GLOBAL_UNDEFINED)
      ;
  }

}
