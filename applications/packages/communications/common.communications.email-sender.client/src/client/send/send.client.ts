import { COMMS_ESS_API_ENDPOINTS } from "@wraithlight/core.communications.email-sender.constants";
import {
  SendEmailNotificationRequest,
  SendEmailResponse
} from "@wraithlight/core.communications.email-sender.types";
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

  public async postEmail(
    payload: SendEmailNotificationRequest
  ): Promise<Nullable<SendEmailResponse>> {
    const url = COMMS_ESS_API_ENDPOINTS.v1.send.post.forClient();
    const result = await super
      .postConsolidated<
        SendEmailResponse,
        SendEmailNotificationRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

}
