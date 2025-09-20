import { DummyEmailSenderFacadeService } from "./email-sender.service";

describe("DummyEmailSenderFacadeServiceSpecs", () => {
  describe("given the service is initialized", () => {
    let service: DummyEmailSenderFacadeService;
    beforeAll(() => {
      service = new DummyEmailSenderFacadeService();
    });
    it("should not be nil", () => {
      expect(service).not.toBeNull();
      expect(service).not.toBeUndefined();
    });
  });
});
