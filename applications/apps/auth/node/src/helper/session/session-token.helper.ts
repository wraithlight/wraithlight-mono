import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  CoreEnvironment
} from "@wraithlight/core.env.sdk";
import { Guid } from "@wraithlight/core.guid";
import {
  CoreJWT
} from "@wraithlight/core.jwt";
import { isEmptyStringOrNil, isNil } from "@wraithlight/framework.nullable";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

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
    validityInMinutes: number
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
      validityInMinutes
    );

    if (isEmptyStringOrNil(result)) {
      return OperationResultFactory.error();
    }

    return OperationResultFactory.success(result);
  }

}
