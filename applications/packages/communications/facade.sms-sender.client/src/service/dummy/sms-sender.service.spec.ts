import { DummySmsSenderFacadeService } from "./sms-sender.service";

describe("DummySmsSenderFacadeServiceSpecs", () => {
  describe("given the service is initialized", () => {
    let service: DummySmsSenderFacadeService;
    beforeAll(() => {
      service = new DummySmsSenderFacadeService();
    });
    it("should not be nil", () => {
      expect(service).not.toBeNull();
      expect(service).not.toBeUndefined();
    });
  });
});
