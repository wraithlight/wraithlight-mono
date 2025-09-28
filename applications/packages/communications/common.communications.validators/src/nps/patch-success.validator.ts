import {
  NotifierProxyCommunicationPatchSuccessRequest
} from "@wraithlight/core.communications.notifier-proxy.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

export class PatchSuccessValidator
  extends Validator<NotifierProxyCommunicationPatchSuccessRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(4)
    );

    this.addValidationRule(
      m => m.sentAtUtc,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );

  }

}
