
const clientCtorSpy = jest.fn();

jest.mock("../../client", () => {
  return {
    SendClient: clientCtorSpy
  }
});

import { SendService } from "./send.service";

describe("SendServiceSpecs", () => {

  const MOCK_API_TOKEN = "MOCK_API_TOKEN";

  describe("given the service is initialized", () => {
    let service: SendService;
    describe("when i create a new instance", () => {
      beforeEach(() => {
        service = new SendService(MOCK_API_TOKEN);
      });
      it("should create the respective clients as well", () => {
        expect(clientCtorSpy).toHaveBeenCalled();
        expect(clientCtorSpy).toHaveBeenCalledTimes(1);
        expect(clientCtorSpy).toHaveBeenCalledWith(MOCK_API_TOKEN);
      });
    });
  });
});
