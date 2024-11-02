/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function */

import { Guid } from "@wraithlight/core.guid";
import {
  BaseController,
  FromBody,
  FromHeader,
  FromPath,
  HttpController,
  HttpDelete,
  HttpGet,
  HttpPatch,
  HttpPost
} from "@wraithlight/core.node";
import { API_ENDPOINTS } from "@wraithlight/core.user-management.constants";

@HttpController(API_ENDPOINTS.external.v3.session.root)
export class ExternalSessionV3Controller extends BaseController {

  // TODO: Move API Token check to a common filter

  @HttpGet(API_ENDPOINTS.external.v3.session.id.get.forServer)
  public async getSession(
    @FromHeader("X-WL-SESSION") sessionToken: Guid,   // TODO: Constants
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("contextId") contextId: Guid
  ) {}

  @HttpDelete(API_ENDPOINTS.external.v3.session.id.delete.forServer)
  public async deleteSession(
    @FromHeader("X-WL-SESSION") sessionToken: Guid,   // TODO: Constants
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("contextId") contextId: Guid
  ) {}

  @HttpPost(API_ENDPOINTS.external.v3.session.id.post.forServer)
  public async createSession(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("contextId") contextId: Guid,
    @FromBody() model: {
      identifier: string,
      password: string,
      keepSignedIn: boolean
    } // TODO: Types
  ) {}

  @HttpPatch(API_ENDPOINTS.external.v3.session.id.patch.forServer)
  public async renewSession(
    @FromHeader("X-WL-SESSION") sessionToken: Guid,   // TODO: Constants
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("contextId") contextId: Guid
  ) {}

}
