import { NavigatorRef, getNavigatorRef } from "./navigatorref"

describe("NavigatorRefSpecs", () => {
    describe("given the utility function is initialized", () => {
        describe("when i call it", () => {
            let _navigator: NavigatorRef;
            beforeAll(() => {
                _navigator = getNavigatorRef();
            });
            it("should return the `document` object", () => {
                // eslint-disable-next-line no-restricted-globals
                expect(navigator).toBe(_navigator)
            });
        })
    });
});
