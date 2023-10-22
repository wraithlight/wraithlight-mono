jest.mock("@wraithlight/core.dom", () => {
    return {
        // eslint-disable-next-line no-restricted-globals
        getDocumentRef: jest.fn().mockImplementation(() => document)
    }
});
jest.mock("@wraithlight/common.logger.sdk", () => {
    return {
        LoggerService: {
            getInstance: jest.fn(),
            error: jest.fn()
        }
    }
});
jest.mock("@wraithlight/common.auth-sdk.client", () => {
    return {
        initializeAuthSdk: jest.fn()
    }
});
jest.mock("@wraithlight/core.redux", () => {
    return {
        Store: {
            initialize: jest.fn(),
            getInstance: jest.fn()
        }
    }
});

jest.mock("@angular/platform-browser-dynamic", () => {
    return {
        bootstrapModule: jest.fn().mockImplementation(() => Promise.resolve())
    }
});
jest.mock("./app/app.module", () => {
    return {
        AppModule: jest.fn()
    }
});


import { getDocumentRef } from "@wraithlight/core.dom";

describe("mainSpecs", () => {

    const addEventListenerSpy = jest.spyOn(document, "addEventListener");

    describe("given the entry is initialized", () => {
        describe("when i import it", () => {
            beforeAll(() => {
                require("./main");
            });

            it("should read the current documentref", () => {
                expect(getDocumentRef).toHaveBeenCalled();
                expect(getDocumentRef).toHaveBeenCalledTimes(1);
            });

            it("should registed to the DOMContentLoaded", () => {
                expect(addEventListenerSpy).toHaveBeenCalled();
                expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
