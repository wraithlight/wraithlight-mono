import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  CoreEnvironment
} from "@wraithlight/core.env.sdk";
import {
  CoreJWT
} from "@wraithlight/core.jwt";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";
import { isEmptyStringOrNil, isNil } from "@wraithlight/framework/framework.nullable";
import { Guid } from "@wraithlight/core.guid";

import { DEFAULT_EXPIRY_IN_MINUTES } from "./session-token.const";
import { SessionTokenPayload } from "./session-token.model";

export class SessionTokenHelper {

  private readonly _config = ServerUserManagementConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
  ;

  public decrypt(token: string): OperationResult<SessionTokenPayload> {
    const result = CoreJWT.decrypt<SessionTokenPayload>(
      token,
      this._config.get(m => m.session.iv),
      this._config.get(m => m.session.key)
    );

    if (!result.success || isNil(result.payload)) {
      return OperationResultFactory.error();
    }

    return OperationResultFactory.success(result.payload);
  }

  public encrypt(
    userId: Guid,
    contextId: Guid,
  ): OperationResult<string> {
    const payload: SessionTokenPayload = {
      userId: userId,
      contextId: contextId
    };

    const result = CoreJWT.encrypt<SessionTokenPayload>(
      payload,
      this._config.get(m => m.session.iv),
      this._config.get(m => m.session.key),
      this._config.get(m => m.session.secret),
      DEFAULT_EXPIRY_IN_MINUTES
    );

    if (isEmptyStringOrNil(result)) {
      return OperationResultFactory.error();
    }

    return OperationResultFactory.success(result);
  }

}
