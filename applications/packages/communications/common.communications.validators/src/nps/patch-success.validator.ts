import {
  NotifierProxyCommunicationPatchSuccessRequest
} from "@wraithlight/core.communications.notifier-proxy.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

import { PATCH_SUCCESS_PAYLOAD_NUMBER_OF_PROPERTIES } from "./nps-validator.constants";

export class PatchSuccessValidator
  extends Validator<NotifierProxyCommunicationPatchSuccessRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(PATCH_SUCCESS_PAYLOAD_NUMBER_OF_PROPERTIES)
    );

    this.addValidationRule(
      m => m.sentAtUtc,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );

  }

}
