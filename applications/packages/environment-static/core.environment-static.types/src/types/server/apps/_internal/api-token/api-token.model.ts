import { ApplicationNames } from "@wraithlight/domain.application-info.constants";

export interface ApiToken {
  /**
   * Array of API TOKENS that are being sent in the request headers.
   */
  caller: ReadonlyArray<string>;
  /**
   * Array of valid API TOKENS that are being received in the request headers.
   */
  receiver: ReadonlyArray<string>;
}

export interface ApiTokens extends Partial<Record<ApplicationNames, ApiToken>> {
}
