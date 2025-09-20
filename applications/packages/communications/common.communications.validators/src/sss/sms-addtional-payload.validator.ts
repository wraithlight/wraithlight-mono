import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";
import {
  SendSmsNotificationAddtionalPayloadRequest
} from "@wraithlight/core.communications.sms-sender.types";

export class SmsAdditionalPayloadSendRequestValidator
  extends Validator<SendSmsNotificationAddtionalPayloadRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeObject()
        .toHaveNProperties(0)
    );
  }

}
