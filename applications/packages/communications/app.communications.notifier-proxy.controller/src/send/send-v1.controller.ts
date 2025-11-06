import {
  BaseController,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  API_ENDPOINTS
} from "@wraithlight/core.communications.notifier-proxy.constants";
import { Guid } from "@wraithlight/framework.guid";
import {
  WithApiToken,
  WithSessionId,
  WithValidApiToken
} from "@wraithlight/common.node.evo-utils"
import {
  CommunicationManager
} from "@wraithlight/common.communications.notifier-proxy.business-logic";

import { VALID_API_TOKENS } from "./send-v1.const";

@HttpDecorators.httpController(API_ENDPOINTS.v1.communication.forServer())
export class SendV1Controller extends BaseController {

  private readonly _manager = new CommunicationManager();

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpGet(API_ENDPOINTS.v1.communication.get.forServer())
  public async getCommunications(
    @HttpDecorators.fromQuery('skip') skip: number,
    @HttpDecorators.fromQuery('take') take: number
  ) {}

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpGet(API_ENDPOINTS.v1.communication.id.get.forServer())
  public async getCommunication(
    @HttpDecorators.fromPath('id') id: Guid
  ) {}

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpPost(API_ENDPOINTS.v1.communication.post.forServer())
  public async createCommunication() {}

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpPatch(API_ENDPOINTS.v1.communication.id.success.patch.forServer())
  public async patchCommunicationSuccess(
    @HttpDecorators.fromPath('id') id: Guid
  ) {}

  @WithApiToken()
  @WithSessionId()
  @WithValidApiToken(VALID_API_TOKENS)
  @HttpDecorators.httpPatch(API_ENDPOINTS.v1.communication.id.fail.patch.forServer())
  public async pathCommunicationFail(
    @HttpDecorators.fromPath('id') id: Guid
  ) {}

}
