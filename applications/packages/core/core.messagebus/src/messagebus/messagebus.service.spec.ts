import { Guid, isGuid } from "@wraithlight/core.guid";

import { MessagebusService } from "./messagebus.service";

describe("MessagebusServiceSpecs", () => {
  let service: MessagebusService;

  const MOCK_TOKEN = "mock-token";
  const MOCK_CALLBACK = jest.fn();
  const MOCK_MESSAGE = "mock-message";

  describe("given the service is initialized", () => {
    beforeEach(() => {
      service = new MessagebusService();
    });
    describe("when i add a new subscriber", () => {
      let guid: Guid
      beforeEach(() => {
        guid = service.sub(MOCK_TOKEN, MOCK_CALLBACK);
      });
      it("should return a guid", () => {
        expect(guid).toBeTruthy();
        expect(isGuid(guid)).toBe(true);
      });
    });
    describe("and there is a subscriber", () => {
      let guid: Guid;
      beforeEach(() => {
        guid = service.sub(MOCK_TOKEN, MOCK_CALLBACK);
      });
      afterEach(() => {
        jest.resetAllMocks();
      });
      describe("when i push a new message", () => {
        beforeEach(() => {
          service.push(MOCK_TOKEN, MOCK_MESSAGE);
        });
        it("should emit the callback", () => {
          expect(MOCK_CALLBACK).toHaveBeenCalled();
          expect(MOCK_CALLBACK).toHaveBeenCalledTimes(1);
          expect(MOCK_CALLBACK).toHaveBeenCalledWith(MOCK_MESSAGE);
        });
      });
      describe("when i remove the subscriber", () => {
        beforeEach(() => {
          service.removeListener(guid);
        });
        describe("and push a new message", () => {
          beforeEach(() => {
            service.push(MOCK_TOKEN, MOCK_MESSAGE);
          });
          it("should not emit the callback", () => {
            expect(MOCK_CALLBACK).not.toHaveBeenCalled();
            expect(MOCK_CALLBACK).not.toHaveBeenCalledTimes(1);
            expect(MOCK_CALLBACK).not.toHaveBeenCalledWith(MOCK_MESSAGE);
          });
        })
      })
    });
  });
});
