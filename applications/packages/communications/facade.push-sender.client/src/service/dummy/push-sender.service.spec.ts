import { DummyPushSenderFacadeService } from "./push-sender.service";

describe("DummyPushSenderFacadeServiceSpecs", () => {
  describe("given the service is initialized", () => {
    let service: DummyPushSenderFacadeService;
    beforeAll(() => {
      service = new DummyPushSenderFacadeService();
    });
    it("should not be nil", () => {
      expect(service).not.toBeNull();
      expect(service).not.toBeUndefined();
    });
  });
});
