import { SendRequestValidator } from "./common";
import { CreateCommunicationValidator, PatchFailValidator, PatchSuccessValidator } from "./nps";
import { SmsAdditionalPayloadSendRequestValidator } from "./sss";

export namespace CommonValidators {
  // eslint-disable-next-line max-len
  export const SendRequestPayloadValidator = <T extends object>(): SendRequestValidator<T> => new SendRequestValidator<T>();
}

export namespace SSSValidators {
  // eslint-disable-next-line max-len
  export const SMSAdditionalPayloadValidator = new SmsAdditionalPayloadSendRequestValidator();
}

export namespace NPSValidators {
  // eslint-disable-next-line max-len
  export const NPSCreateCommunicationValidator = new CreateCommunicationValidator();
  export const NPSPatchFailValidator = new PatchFailValidator();
  export const NPSPatchSuccessValidator = new PatchSuccessValidator();
}
