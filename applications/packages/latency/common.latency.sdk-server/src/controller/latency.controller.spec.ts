import { BaseController } from "@wraithlight/core.node";

import { LatencyController } from "./latency.controller";

const MOCK_RESPONSE = {
    status: jest.fn(),
    contentType: jest.fn(),
    send: jest.fn(),
}

describe("LatencyControllerSpecs", () => {

    let controller: LatencyController;
    const okSpy = jest.spyOn(BaseController.prototype as any, "ok")

    describe("given the controller is initialized", () => {
        beforeEach(() => {
            controller = new LatencyController();
            controller.setResponseContext(MOCK_RESPONSE as any);
        });
        describe("when i call `getLatency()`", () => {
            beforeEach(() => {
                controller.getLatency();
            });
            it("should send the proper response", () => {
                expect(okSpy).toHaveBeenCalled();
            });
        });
    });
});
