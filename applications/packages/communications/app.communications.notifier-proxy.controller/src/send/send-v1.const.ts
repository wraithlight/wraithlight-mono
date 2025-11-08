import { ServerCommsNPSConfigReader } from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";

const reader = ServerCommsNPSConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;
export const VALID_API_TOKENS = reader
  .tryGet<ReadonlyArray<string>>(m => m.allowedApiTokens, [])
;

