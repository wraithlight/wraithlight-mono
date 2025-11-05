import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { ServerCommsNPSConfigReader } from "@wraithlight/common.environment-static.server";

const reader = ServerCommsNPSConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;
export const VALID_API_TOKENS = reader
  .tryGet<ReadonlyArray<string>>(m => m.allowedApiTokens, [])
;

