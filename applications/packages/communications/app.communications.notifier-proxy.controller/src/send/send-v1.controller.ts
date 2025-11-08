import {
  CommunicationManager
} from "@wraithlight/common.communications.notifier-proxy.business-logic";
import { NPSValidators } from "@wraithlight/common.communications.validators";
import {
  GuidValidator,
  NumberIntegerValidator,
  NumberMinMaxValidator,
  WithApiToken,
  WithSessionId,
  WithValidApiToken
} from "@wraithlight/common.node.evo-utils";
import { SendEmailNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.email-sender.types";
import {
  API_ENDPOINTS
} from "@wraithlight/core.communications.notifier-proxy.constants";
import {
  NotifierProxyCommunicationGetResponse,
  NotifierProxyCommunicationPatchFailedRequest,
  NotifierProxyCommunicationPatchFailedResponse,
  NotifierProxyCommunicationPatchSuccessRequest,
  NotifierProxyCommunicationPatchSuccessResponse,
  NotifierProxyCommunicationPostRequest,
  NotifierProxyCommunicationPostResponse,
  NotifierProxyCommunicationsGetResponse
} from "@wraithlight/core.communications.notifier-proxy.types";
import { SendPushNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.push-sender.types";
import { SendSmsNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.sms-sender.types";
import { BadRequestError } from "@wraithlight/core.errors";
import {
  BaseController,
  BaseControllerResult,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import { IListResult } from "@wraithlight/domain.http.types";
import { dateISODeserialize } from "@wraithlight/framework.date";
import { Guid } from "@wraithlight/framework.guid";
import { cast } from "@wraithlight/framework.type-utils";

import { VALID_API_TOKENS } from "./send-v1.const";

@HttpDecorators.httpController(API_ENDPOINTS.v1.communication.forServer())
export class SendV1Controller extends BaseController {

  private readonly _manager = new CommunicationManager();

  private readonly _guidValidator = new GuidValidator();
  private readonly _numberIntegerValidator = new NumberIntegerValidator();
  // eslint-disable-next-line max-len
  private readonly _numberMinMaxValidator = new NumberMinMaxValidator(0, +Infinity);
  // eslint-disable-next-line max-len
  private readonly _patchFailPayloadValidator = NPSValidators.NPSPatchFailValidator;
  // eslint-disable-next-line max-len
  private readonly _patchSuccessPayloadValidator = NPSValidators.NPSPatchSuccessValidator;
  // eslint-disable-next-line max-len
  private readonly _createCommunicationValidator = NPSValidators.NPSCreateCommunicationValidator;

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpGet(API_ENDPOINTS.v1.communication.get.forServer())
  public async getCommunications(
    @HttpDecorators.fromQuery("skip") skip: number,
    @HttpDecorators.fromQuery("take") take: number
    // eslint-disable-next-line max-len
  ): Promise<BaseControllerResult<IListResult<NotifierProxyCommunicationsGetResponse>>> {
    this.paginationValidator(skip, take);
    const result = await this._manager.getList(skip, take);
    return super.ok(result);
  }

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpGet(API_ENDPOINTS.v1.communication.id.get.forServer())
  public async getCommunication(
    @HttpDecorators.fromPath("id") id: Guid
  ): Promise<BaseControllerResult<NotifierProxyCommunicationGetResponse>> {
    this.guidValidator(id);
    const result = await this._manager.getById(id);
    return super.ok(result);
  }

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  // eslint-disable-next-line max-len
  @HttpDecorators.httpPost(API_ENDPOINTS.v1.communication.post.forServer())
  public async createCommunication(
    // eslint-disable-next-line max-len
    @HttpDecorators.fromBody() payload: NotifierProxyCommunicationPostRequest
    // eslint-disable-next-line max-len
  ): Promise<BaseControllerResult<NotifierProxyCommunicationPostResponse>> {
    // eslint-disable-next-line max-len
    const validationResult = this._createCommunicationValidator.validate(payload);
    if (!validationResult.success) {
      throw new BadRequestError();
    }
    switch(payload.tunnel) {
      case "NOTIFICATION_EMAIL": {
        const result = await this._manager.sendEmail(
          payload.identifier,
          payload.content,
          // eslint-disable-next-line max-len
          cast<SendEmailNotificationAddtionalPayloadRequest>(payload.additionalMessagePayload)
        );
        return super.created(result);
      }
      case "NOTIFICATION_PUSH": {
        const result = await this._manager.sendPush(
          payload.identifier,
          payload.content,
          // eslint-disable-next-line max-len
          cast<SendPushNotificationAddtionalPayloadRequest>(payload.additionalMessagePayload)
        );
        return super.created(result);
      }
      case "NOTIFICATION_SMS": {
        const result = await this._manager.sendSms(
          payload.identifier,
          payload.content,
          // eslint-disable-next-line max-len
          cast<SendSmsNotificationAddtionalPayloadRequest>(payload.additionalMessagePayload)
        );
        return super.created(result);
      }
      default: {
        throw new BadRequestError();
      }
    }
  }

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  // eslint-disable-next-line max-len
  @HttpDecorators.httpPatch(API_ENDPOINTS.v1.communication.id.success.patch.forServer())
  public async patchCommunicationSuccess(
    @HttpDecorators.fromPath("id") id: Guid,
    // eslint-disable-next-line max-len
    @HttpDecorators.fromBody() payload: NotifierProxyCommunicationPatchSuccessRequest
    // eslint-disable-next-line max-len
  ): Promise<BaseControllerResult<NotifierProxyCommunicationPatchSuccessResponse>> {
    this.guidValidator(id);
    // eslint-disable-next-line max-len
    const validationResult = this._patchSuccessPayloadValidator.validate(payload);
    if (!validationResult.success) {
      throw new BadRequestError();
    }
    // eslint-disable-next-line max-len
    const result = await this._manager.updateCommunicationSuccess(id, dateISODeserialize(payload.sentAtUtc));
    return super.ok(result);
  }

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  // eslint-disable-next-line max-len
  @HttpDecorators.httpPatch(API_ENDPOINTS.v1.communication.id.fail.patch.forServer())
  public async pathCommunicationFail(
    @HttpDecorators.fromPath("id") id: Guid,
    // eslint-disable-next-line max-len
    @HttpDecorators.fromBody() payload: NotifierProxyCommunicationPatchFailedRequest
    // eslint-disable-next-line max-len
  ): Promise<BaseControllerResult<NotifierProxyCommunicationPatchFailedResponse>> {
    this.guidValidator(id);
    // eslint-disable-next-line max-len
    const validationResult = this._patchFailPayloadValidator.validate(payload);
    if (!validationResult.success) {
      throw new BadRequestError();
    }
    // eslint-disable-next-line max-len
    const result = await this._manager.updateCommunicationFail(id, payload.errorMessage);
    return super.ok(result);
  }

  private guidValidator(guid: Guid): void {
    const validationResult = this._guidValidator.validate(guid);
    if (!validationResult.success) {
      throw new BadRequestError();
    }
  }

  private paginationValidator(
    skip: number,
    take: number
  ): void {
    // eslint-disable-next-line max-len
    const skipIntegerValidationResult = this._numberIntegerValidator.validate(skip);
    // eslint-disable-next-line max-len
    const takeIntegerValidationResult = this._numberIntegerValidator.validate(take);

    if (!skipIntegerValidationResult.success) {
      throw new BadRequestError();
    }

    if (!takeIntegerValidationResult.success) {
      throw new BadRequestError();
    }

    // eslint-disable-next-line max-len
    const skipMinMaxValidationResult = this._numberMinMaxValidator.validate(skip);
    // eslint-disable-next-line max-len
    const takeMinMaxValidationResult = this._numberMinMaxValidator.validate(take);
    if(!skipMinMaxValidationResult.success) {
      throw new BadRequestError();
    }

    if(!takeMinMaxValidationResult.success) {
      throw new BadRequestError();
    }
  }

}
