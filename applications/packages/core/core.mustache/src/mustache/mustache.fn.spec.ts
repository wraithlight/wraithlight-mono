import { wlMustache } from "./mustache.fn";

// TODO: Create __mocks__
jest.mock("@wraithlight/facade.mustache", () => {
    return {
        mustacheFacade: jest.fn().mockImplementation((template) => ({ renderedTemplate: template }))
    }
});

import { mustacheFacade } from "@wraithlight/facade.mustache";

describe("wlMustacheSpecs", () => {

    const MOCK_TEMPLATE = "template";
    const MOCK_DATA = {};

    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            beforeEach(() => {
                wlMustache(MOCK_TEMPLATE, MOCK_DATA);
            });
            it("should call the underlying service with the proper params", () => {
                expect(mustacheFacade).toBeCalled();
                expect(mustacheFacade).toBeCalledTimes(1);
                expect(mustacheFacade).toBeCalledWith(MOCK_TEMPLATE, MOCK_DATA);
            });
        });
    });
});
