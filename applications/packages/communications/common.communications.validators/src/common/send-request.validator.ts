import { SendRequest } from "@wraithlight/core.communications.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

export class SendRequestValidator<T extends object>
  extends Validator<SendRequest<T>> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.proxyId,
      ValidationRule
        .toBeString()
        .toBeGuid()
        .notToBeNil()
    );
    this.addValidationRule(
      m => m.identifier,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );
    this.addValidationRule(
      m => m.content,
      ValidationRule
        .toBeString()
        .notToBeNil()
    );
    this.addValidationRule(
      m => m.additionalMessagePayload,
      ValidationRule
        .toBeObject()
        .notToBeNil()
    );
  }

}
