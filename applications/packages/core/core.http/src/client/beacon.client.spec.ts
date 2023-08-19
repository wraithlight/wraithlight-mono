const MOCK_NAVIGATOR = { sendBeacon: jest.fn() };
jest.mock("@wraithlight/core.dom", () => {
    return {
        getNavigatorRef: jest.fn().mockImplementation(() => MOCK_NAVIGATOR)
    }
});
import { getNavigatorRef } from "@wraithlight/core.dom";

import { HttpBeaconClient } from "./beacon.client";

describe("BeaconClientSpecs", () => {

    const MOCK_URL = "http://wraithlight.ai";
    const MOCK_DATA = "Wraithlight rulz!";
    const navigator = getNavigatorRef();
    let service: HttpBeaconClient;

    describe("given the client is initialized", () => {

        service = new HttpBeaconClient();

        describe("when i call `beacon`", () => {

            beforeEach(() => {
                service.beacon(MOCK_URL, MOCK_DATA)
            });

            it("should call the underlying `navigator.beacon()`", () => {
                expect(navigator.sendBeacon).toHaveBeenCalled();
                expect(navigator.sendBeacon).toHaveBeenCalledTimes(1);
                expect(navigator.sendBeacon).toHaveBeenCalledWith(MOCK_URL, JSON.stringify(MOCK_DATA));
            });
        });
    });
});
