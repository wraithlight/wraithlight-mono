const clientCtorSpy = jest.fn();

jest.mock("../client", () => {
    return {
        ContentClient: clientCtorSpy
    }
});

import { ContentService } from "./content.service";

describe("ContentServiceSpecs", () => {

    let service: ContentService;
    const MOCK_BASE_URL = "base-url";
    const MOCK_KEY = "key";

    describe("given the service is initialized", () => {

        service = new ContentService(MOCK_BASE_URL, MOCK_KEY);

        it("should create a client", () => {
            expect(clientCtorSpy).toHaveBeenCalled();
            expect(clientCtorSpy).toHaveBeenCalledTimes(1);
            expect(clientCtorSpy).toHaveBeenCalledWith(MOCK_BASE_URL, MOCK_KEY);
        });
    });
});
