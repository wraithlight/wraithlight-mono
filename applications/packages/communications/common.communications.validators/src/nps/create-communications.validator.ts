import {
  NotifierProxyCommunicationPostRequest
} from "@wraithlight/core.communications.notifier-proxy.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";
import { IDENTIFIER_MAX_LENGTH, IDENTIFIER_MIN_LENGTH } from "./nps-validator.constants";

export class CreateCommunicationValidator
  extends Validator<NotifierProxyCommunicationPostRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(4)
    );

    this.addValidationRule(
      m => m.identifier,
      ValidationRule
        .toBeString()
        .toHaveMinLength(IDENTIFIER_MIN_LENGTH)
        .toHaveMaxLength(IDENTIFIER_MAX_LENGTH)
        .notToBeNil()
    );

    this.addValidationRule(
      m => m.content,
      ValidationRule
        .toBeString()
        .toHaveMinLength(1)
        .notToBeNil()
    );

    // TODO: Infer/centrialize.
    const allowedCommunicationTunnelValues = ["NOTIFICATION_EMAIL", "NOTIFICATION_SMS", "NOTIFICATION_PUSH"];
    this.addValidationRule(
      m => m.tunnel,
      ValidationRule
        .toBeEnum()
        .toMatchValues(allowedCommunicationTunnelValues)
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
