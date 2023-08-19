import { DocumentRef, getDocumentRef } from "./documentref"

describe("DocumentRefSpecs", () => {
    describe("given the utility function is initialized", () => {
        describe("when i call it", () => {
            let _document: DocumentRef;
            beforeAll(() => {
                _document = getDocumentRef();
            });
            it("should return the `document` object", () => {
                expect(document).toBe(_document)
            });
        })
    });
});
