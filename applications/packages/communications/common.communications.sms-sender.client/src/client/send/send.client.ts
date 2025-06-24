import { COMMS_SSS_API_ENDPOINTS } from "@wraithlight/core.communications.sms-sender.constants";
import {
  SendSmsNotificationRequest,
  SendSmsResponse
} from "@wraithlight/core.communications.sms-sender.types";
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

  public async postSms(
    payload: SendSmsNotificationRequest
  ): Promise<Nullable<SendSmsResponse>> {
    const url = COMMS_SSS_API_ENDPOINTS.v1.send.post.forClient();
    const result = await super
      .postConsolidated<
        SendSmsResponse,
        SendSmsNotificationRequest
      >(url, payload)
    ;
    return result.isSuccess ? result.payload : GLOBAL_UNDEFINED;
  }

}
