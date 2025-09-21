import { SendSMSManager } from "@wraithlight/common.communications.sms-sender.business-logic";
import {
  CommonValidators,
  SSSValidators
} from "@wraithlight/common.communications.validators";
import {
  ApiToken,
  WithApiToken
} from "@wraithlight/common.node.evo-utils";
import { COMMS_SSS_API_ENDPOINTS } from "@wraithlight/core.communications.sms-sender.constants";
import {
  SendSmsNotificationRequest,
  SendSmsResponse
} from "@wraithlight/core.communications.sms-sender.types";
import { BadRequestError, ForbiddenError } from "@wraithlight/core.errors";
import {
  BaseController,
  BaseControllerResult,
  HttpDecorators
} from "@wraithlight/core.node.evo";

import { ApiTokenValidator } from "../validator";

@HttpDecorators.httpController(COMMS_SSS_API_ENDPOINTS.v1.send.forServer())
export class SendV1Controller extends BaseController {

  private readonly _manager = new SendSMSManager();
  private readonly _apiTokenValidator = new ApiTokenValidator();
  // eslint-disable-next-line max-len
  private readonly _sendValidator = CommonValidators.SendRequestPayloadValidator();
  // eslint-disable-next-line max-len
  private readonly _payloadValidator = SSSValidators.SMSAdditionalPayloadValidator;

  @WithApiToken()
  @HttpDecorators.httpPost(COMMS_SSS_API_ENDPOINTS.v1.send.post.forServer())
  public async sendSms(
    @ApiToken() apiToken: string,
    @HttpDecorators.fromBody() payload: SendSmsNotificationRequest
  ): Promise<BaseControllerResult<SendSmsResponse>> {
    const apiTokenValidationResult = this._apiTokenValidator.validate(apiToken);
    if (!apiTokenValidationResult.success) {
      throw new ForbiddenError();
    }

    const bodyValidationResult = this._sendValidator.validate(payload);
    if (!bodyValidationResult.success) {
      throw new BadRequestError();
    }

    const payloadValidationResult = this._payloadValidator
      .validate(
        payload.additionalMessagePayload
      );
    if (!payloadValidationResult.success) {
      throw new BadRequestError();
    }

    const sendResult = await this._manager.sendSms(
      payload.proxyId,
      payload.content,
      payload.identifier
    );
    return super.ok(sendResult);
  }

}
