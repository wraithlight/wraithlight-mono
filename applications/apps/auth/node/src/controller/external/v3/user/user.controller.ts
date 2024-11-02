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

@HttpController(API_ENDPOINTS.external.v3.user.root)
export class ExternalUserV3Controller extends BaseController {

  // TODO: Move API Token check to a common filter

  @HttpGet(API_ENDPOINTS.external.v3.user.get.forServer)
  public async listUsers(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
  ) {}

  @HttpPost(API_ENDPOINTS.external.v3.user.post.forServer)
  public async createUser(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
  ) {}

  @HttpPost(API_ENDPOINTS.external.v3.user.checkEmail.post.forServer)
  public async checkEmail(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromBody() model: { emailAddress: string }
  ) {}

  @HttpPost(API_ENDPOINTS.external.v3.user.checkUsername.post.forServer)
  public async checkUsername(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromBody() model: { username: string }
  ) {}

  @HttpGet(API_ENDPOINTS.external.v3.user.id.get.forServer)
  public async getUser(
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("userId") userId: Guid
  ) {}

  @HttpPatch(API_ENDPOINTS.external.v3.user.id.patch.forServer)
  public async updateUser(
    @FromHeader("X-WL-SESSION") sessionToken: Guid,   // TODO: Constants
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("userId") userId: Guid
  ) {}

  @HttpDelete(API_ENDPOINTS.external.v3.user.id.delete.forServer)
  public async deleteUser(
    @FromHeader("X-WL-SESSION") sessionToken: Guid,   // TODO: Constants
    @FromHeader("X-WL-API-TOKEN") apiToken: Guid,     // TODO: Constants
    @FromPath("userId") userId: Guid
  ) {}

}
