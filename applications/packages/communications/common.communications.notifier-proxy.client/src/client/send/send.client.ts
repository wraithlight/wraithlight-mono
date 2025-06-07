import { API_ENDPOINTS } from "@wraithlight/core.communications.notifier-proxy.constants";
import {
  NotifierProxyCommunicationGetResponse,
  NotifierProxyCommunicationPatchFailedRequest,
  NotifierProxyCommunicationPatchFailedResponse,
  NotifierProxyCommunicationPatchSuccessRequest,
  NotifierProxyCommunicationPatchSuccessResponse,
  NotifierProxyCommunicationPostRequest,
  NotifierProxyCommunicationPostResponse,
  NotifierProxyCommunicationsGetResponse,
} from "@wraithlight/core.communications.notifier-proxy.types";
import { CoreHttpClient } from "@wraithlight/core.http";
import { GLOBAL_UNDEFINED } from "@wraithlight/core.undefined";
import { HeaderName } from "@wraithlight/domain.http.constants";
import { IListResult } from "@wraithlight/domain.http.types";
import { Guid } from "@wraithlight/framework.guid";
import { Nullable } from "@wraithlight/framework.nullable";

export class SendClient extends CoreHttpClient {

  constructor(
    private readonly apiToken: string
  ) {
    super();
  }

  public getHeaders(): HeadersInit {
    return {
      ...super.getHeaders(),
      [HeaderName.ApiToken]: this.apiToken
    };
  }

  public async postCommuncation(
    payload: NotifierProxyCommunicationPostRequest
  ): Promise<Nullable<NotifierProxyCommunicationPostResponse>> {
    const url = API_ENDPOINTS.v1.communication.post.forClient();
    const result = await super
      .postConsolidated<
        NotifierProxyCommunicationPostResponse,
        NotifierProxyCommunicationPostRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

  public async getCommunications(
    skip: number,
    take: number
  ): Promise<Nullable<IListResult<NotifierProxyCommunicationsGetResponse>>> {
    const url = API_ENDPOINTS.v1.communication.get.forClient(skip, take);
    const result = await super
    .getConsolidated<IListResult<NotifierProxyCommunicationsGetResponse>>(url)
  ;
  return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

  public async getCommunication(
    id: Guid
  ): Promise<Nullable<NotifierProxyCommunicationGetResponse>> {
    const url = API_ENDPOINTS.v1.communication.id.get.forClient(id);
    const result = await super
      .getConsolidated<NotifierProxyCommunicationGetResponse>(url)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

  public async patchCommunicationSuccess(
    id: Guid,
    payload: NotifierProxyCommunicationPatchSuccessRequest
  ): Promise<Nullable<NotifierProxyCommunicationPatchSuccessResponse>> {
    const url = API_ENDPOINTS.v1.communication.id.success.patch.forClient(id);
    const result = await super
      .patchConsolidated<
        NotifierProxyCommunicationPatchSuccessResponse,
        NotifierProxyCommunicationPatchSuccessRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

  public async patchCommunicationFail(
    id: Guid,
    payload: NotifierProxyCommunicationPatchFailedRequest
  ): Promise<Nullable<NotifierProxyCommunicationPatchFailedResponse>> {
    const url = API_ENDPOINTS.v1.communication.id.fail.patch.forClient(id);
    const result = await super
      .patchConsolidated<
        NotifierProxyCommunicationPatchFailedResponse,
        NotifierProxyCommunicationPatchFailedRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

}
