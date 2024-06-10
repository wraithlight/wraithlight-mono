const ctorSpy = jest.fn();
const getLatencySpy = jest.fn();
jest.mock("../client", () => {
    return {
        LatencyClient: ctorSpy.mockImplementation(() => {
            return {
                getLatency: getLatencySpy
            }
        }) 
    }
})

import { LatencyService } from "./latency.service";

describe("LatencyServiceSpecs", () => {

  let service: LatencyService;
  const MOCK_BASE_URL = "base-url";

  describe("given the service is initialized", () => {
    beforeEach(() => {
      service = new LatencyService(MOCK_BASE_URL);
    });
    describe("when i call `getLatency()`", () => {
        beforeEach(async () => {
          const _ = await service.getLatency();
        });
        it("should call the underlying service method", () => {
            expect(getLatencySpy).toHaveBeenCalled();
            expect(getLatencySpy).toHaveBeenCalledTimes(1);
            expect(getLatencySpy).toHaveBeenCalledWith("/api/v1/latency");
        });
    });
  });
});
