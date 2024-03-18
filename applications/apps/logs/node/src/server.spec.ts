jest.mock("@wraithlight/core.server", () => {
    return {
        createNodeServerV2: jest.fn()
    }
});
jest.mock("./controller", () => {
    return {
        LogsEntryController: jest.fn()
    }
});
import { createNodeServerV2 } from "@wraithlight/core.server";

describe("ServerSpecs", () => {
    import("./server");
    describe("given the server has been started", () => {
        it("should call `createNodeServerV2`", () => {
            expect(createNodeServerV2).toHaveBeenCalled();
            expect(createNodeServerV2).toHaveBeenCalledTimes(1);
        });
    });
});
