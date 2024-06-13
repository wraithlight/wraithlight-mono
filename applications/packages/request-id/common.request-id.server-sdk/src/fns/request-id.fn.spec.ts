import { Request } from "express";
import { getRequestId } from "./request-id.fn";
import { REQUEST_ID_HEADER_NAME } from "@wraithlight/core.request-id.constants";
import { Nullable } from "@wraithlight/core.nullable";

describe("RequestIdFnSpecs", () => {

    const MOCK_REQUEST = {
        headers: {}
    };

    describe("given the module is initialized", () => {

        describe("when i call `getRequestId()`", () => {
            describe("and the header is present", () => {
                let val: Nullable<string>;
                beforeEach(() => {
                    const req = {
                        ...MOCK_REQUEST,
                        headers: {
                            [REQUEST_ID_HEADER_NAME]: "mock-name"
                        }
                    };
                    val = getRequestId(toRequest(req));
                });
                it("should return the header value", () => {
                    expect(val).toBe("mock-name");
                });
            });
            describe("and the header is not present", () => {
                let val: Nullable<string>;
                beforeEach(() => {
                    const req = {
                        ...MOCK_REQUEST
                    };
                    val = getRequestId(toRequest(req));
                });
                it("should return the header value", () => {
                    expect(val).toBeUndefined();
                });
            });
        });
    });
});

function toRequest(object: unknown): Request {
    return object as Request;
}