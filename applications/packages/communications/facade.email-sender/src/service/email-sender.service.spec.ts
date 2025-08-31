import { EmailSenderFacadeService } from "./email-sender.service";

describe("EmailSenderFacadeServiceSpecs", () => {
  let service: EmailSenderFacadeService;
  describe("given the service is initialized", () => {
    beforeAll(() => {
      service = new EmailSenderFacadeService();
    });
    it("should not be nil", () => {
      expect(service).not.toBeNull();
      expect(service).not.toBeUndefined();
    });
  });
});
