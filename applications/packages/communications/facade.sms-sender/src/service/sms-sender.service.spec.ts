import { SmsSenderFacadeService } from "./sms-sender.service";

describe("EmailSenderFacadeServiceSpecs", () => {
  let service: SmsSenderFacadeService;
  describe("given the service is initialized", () => {
    beforeAll(() => {
      service = new SmsSenderFacadeService();
    });
    it("should not be nil", () => {
      expect(service).not.toBeNull();
      expect(service).not.toBeUndefined();
    });
  });
});
