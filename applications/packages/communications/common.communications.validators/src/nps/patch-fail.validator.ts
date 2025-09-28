import {
  NotifierProxyCommunicationPatchFailedRequest
} from "@wraithlight/core.communications.notifier-proxy.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

export class PatchFailValidator
  extends Validator<NotifierProxyCommunicationPatchFailedRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(4)
    );

    this.addValidationRule(
      m => m.errorMessage,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );

  }

}
