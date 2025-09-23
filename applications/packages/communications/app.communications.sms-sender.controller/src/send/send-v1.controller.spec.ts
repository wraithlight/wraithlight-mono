const sendRequestPayloadValidatorCtorSpy = jest.fn();
const sendSmsManagetCtorSpy = jest.fn();
const apiTokenValidatorCtorSpy = jest.fn();

jest.mock("@wraithlight/common.communications.validators", () => {
  return {
    CommonValidators: {
      SendRequestPayloadValidator: sendRequestPayloadValidatorCtorSpy
    },
    SSSValidators: {
      SMSAdditionalPayloadValidator: {
        validate: jest.fn()
      }
    }
  }
  
});
jest.mock("@wraithlight/common.communications.sms-sender.business-logic", () => {
  return {
    SendSMSManager: sendSmsManagetCtorSpy
  }
});
jest.mock("../validator", () => {
  return {
    ApiTokenValidator: apiTokenValidatorCtorSpy
  }
});

import { SendV1Controller } from "./send-v1.controller";

describe("LatencyControllerSpecs", () => {

  let controller: SendV1Controller;
  describe("given the controller is initialized", () => {
    beforeAll(() => {
      controller = new SendV1Controller();
    });
    describe("when i create a new instance of it", () => {
      it("should create a SendSMSManager instance", () => {
        expect(sendSmsManagetCtorSpy).toHaveBeenCalled();
        expect(sendSmsManagetCtorSpy).toHaveBeenCalledTimes(1);
      });
      it("should create a ApiTokenValidator instance", () => {
        expect(apiTokenValidatorCtorSpy).toHaveBeenCalled();
        expect(apiTokenValidatorCtorSpy).toHaveBeenCalledTimes(1);
      });
      it("should create a SendRequestPayloadValidator instance", () => {
        expect(sendRequestPayloadValidatorCtorSpy).toHaveBeenCalled();
        expect(sendRequestPayloadValidatorCtorSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
