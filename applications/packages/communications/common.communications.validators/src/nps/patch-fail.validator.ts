import {
  NotifierProxyCommunicationPatchFailedRequest
} from "@wraithlight/core.communications.notifier-proxy.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

import { PATCH_FAIL_PAYLOAD_NUMBER_OF_PROPERTIES } from "./nps-validator.constants";

export class PatchFailValidator
  extends Validator<NotifierProxyCommunicationPatchFailedRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(PATCH_FAIL_PAYLOAD_NUMBER_OF_PROPERTIES)
    );

    this.addValidationRule(
      m => m.errorMessage,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );

  }

}
