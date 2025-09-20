import { SendRequestValidator } from "./common";
import { SmsAdditionalPayloadSendRequestValidator } from "./sss";

export namespace CommonValidators {
  // eslint-disable-next-line max-len
  export const SendRequestPayloadValidator = <T extends object>() => new SendRequestValidator<T>();
}

export namespace SSSValidators {
  // eslint-disable-next-line max-len
  export const SMSAdditionalPayloadValidator = new SmsAdditionalPayloadSendRequestValidator();
}
