const dummyFacadeInitializeSpy = jest.fn();
const notificationQueueServiceCtorSpy = jest.fn();

jest.mock("@wraithlight/facade.push-sender.client", () => {
  return ({
    DummyPushSenderFacadeService: jest
      .fn()
      .mockImplementation(() => {
        return {
          initialize: dummyFacadeInitializeSpy
        }
      })
  })
});
jest.mock("@wraithlight/common.communications.push-sender.dal", () => {
  return ({
    NotificationQueueService: notificationQueueServiceCtorSpy
  })
});

import { SendPushManager } from "./send-push.manager";

describe("SendPushManagerSpecs", () => {

  let manager: SendPushManager;

  describe("given the manager is initialized", () => {

    beforeAll(() => {
      manager = new SendPushManager();
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
