const notificationQueueServiceCtorSpy = jest.fn();
const emailSenderCtorSpy = jest.fn();
const pushSenderCtorSpy = jest.fn();
const smsSenderCtorSpy = jest.fn();

const MOCK_TOKEN = "token";

const configReaderMock = {
  get<T>(): T {
    return MOCK_TOKEN as T;
  }
}

jest.mock("@wraithlight/common.environment-static.server", () => {
  return {
    ServerCommsNPSConfigReader: {
      getInstance: () => configReaderMock
    }
  }
});
jest.mock("@wraithlight/common.communications.notifier-proxy.dal", () => {
  return {
    NotificationQueueService: notificationQueueServiceCtorSpy
  }
});
jest.mock("@wraithlight/common.communications.email-sender.client", () => {
  return {
    SendService: emailSenderCtorSpy
  }
})
jest.mock("@wraithlight/common.communications.push-sender.client", () => {
  return {
    SendService: pushSenderCtorSpy
  }
})
jest.mock("@wraithlight/common.communications.sms-sender.client", () => {
  return {
    SendService: smsSenderCtorSpy
  }
})

import { CommunicationManager } from "./communication.manager";

describe("CommunicationManagerSpecs", () => {
  let manager: CommunicationManager;

  describe("given the manager is initialized", () => {
    beforeAll(() => {
      manager = new CommunicationManager();
    });
    describe("when i create it", () => {
      it("should create and instance of SMSSendService", () => {
        expect(smsSenderCtorSpy).toHaveBeenCalled();
        expect(smsSenderCtorSpy).toHaveBeenCalledTimes(1);
        expect(smsSenderCtorSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      });
      it("should create and instance of PushSendService", () => {
        expect(pushSenderCtorSpy).toHaveBeenCalled();
        expect(pushSenderCtorSpy).toHaveBeenCalledTimes(1);
        expect(pushSenderCtorSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      });
      it("should create and instance of EmailSendService", () => {
        expect(emailSenderCtorSpy).toHaveBeenCalled();
        expect(emailSenderCtorSpy).toHaveBeenCalledTimes(1);
        expect(emailSenderCtorSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      });
      it("should create an instance of NotificationQueueService", () => {
        expect(notificationQueueServiceCtorSpy).toHaveBeenCalled();
        expect(notificationQueueServiceCtorSpy).toHaveBeenCalledTimes(1);
        expect(notificationQueueServiceCtorSpy).toHaveBeenCalledWith();
      });
    });
  });
});
