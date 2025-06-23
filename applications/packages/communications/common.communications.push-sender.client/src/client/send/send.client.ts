import { COMMS_PSS_API_ENDPOINTS } from "@wraithlight/core.communications.push-sender.constants";
import {
  SendPushNotificationRequest,
  SendPushResponse
} from "@wraithlight/core.communications.push-sender.types";
import { CoreHttpClient } from "@wraithlight/core.http";
import { GLOBAL_UNDEFINED } from "@wraithlight/core.undefined";
import { HeaderName } from "@wraithlight/domain.http.constants";
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

  public async postPush(
    payload: SendPushNotificationRequest
  ): Promise<Nullable<SendPushResponse>> {
    const url = COMMS_PSS_API_ENDPOINTS.v1.send.post.forClient();
    const result = await super
      .postConsolidated<
        SendPushResponse,
        SendPushNotificationRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

}
