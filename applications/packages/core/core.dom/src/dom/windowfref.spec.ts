import { WindowRef, getWindowRef } from "./windowref"

describe("WindowRefSpecs", () => {
    describe("given the utility function is initialized", () => {
        describe("when i call it", () => {
            let _window: WindowRef;
            beforeAll(() => {
                _window = getWindowRef();
            });
            it("should return the `document` object", () => {
                // eslint-disable-next-line no-restricted-globals
                expect(window).toBe(_window)
            });
        })
    });
});
