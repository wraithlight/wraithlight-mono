const dummyFacadeInitializeSpy = jest.fn();
const notificationQueueServiceCtorSpy = jest.fn();

jest.mock("@wraithlight/facade.sms-sender.client", () => {
  return ({
    DummySmsSenderFacadeService: jest
      .fn()
      .mockImplementation(() => {
        return {
          initialize: dummyFacadeInitializeSpy
        }
      })
  })
});
jest.mock("@wraithlight/common.communications.sms-sender.dal", () => {
  return ({
    NotificationQueueService: notificationQueueServiceCtorSpy
  })
});

import { SendSMSManager } from "./send-sms.manager";

describe("SendSMSManagerSpecs", () => {

  let manager: SendSMSManager;

  describe("given the manager is initialized", () => {

    beforeAll(() => {
      manager = new SendSMSManager();
    });

    describe("when i create an instance", () => {
      it("should initialize the facade service", () => {
        expect(dummyFacadeInitializeSpy).toHaveBeenCalled();
        expect(dummyFacadeInitializeSpy).toHaveBeenCalledTimes(1);
      });
      it("should create a NotifiacationQueueService DAL instance", () => {
        expect(notificationQueueServiceCtorSpy).toHaveBeenCalled();
        expect(notificationQueueServiceCtorSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
