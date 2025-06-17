const clientCtorSpy = jest.fn();

jest.mock("../../client", () => {
  return {
    SendClient: clientCtorSpy
  }
});

import { SendService } from "./send.service";

describe("SendServiceSpecs", () => {

  const MOCK_API_KEY = "api-key";
  let service: SendService;

  describe("given the service is initialized", () => {
    beforeEach(() => {
      service = new SendService(MOCK_API_KEY);
    })
    describe("when i create a new instance", () => {
      it("should create a client instance with the proper token", () => {
        expect(clientCtorSpy).toHaveBeenCalled();
        expect(clientCtorSpy).toHaveBeenCalledTimes(1);
        expect(clientCtorSpy).toHaveBeenCalledWith(MOCK_API_KEY);
      });
    });
  });
});
