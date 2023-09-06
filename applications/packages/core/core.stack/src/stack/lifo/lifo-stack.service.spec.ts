import { FifoStackService } from "./lifo-stack.service";

interface TestModel {
    property1: string;
    property2: number;
}

describe("FifoStackServiceSpecs", () => {

    const MOCK_ITEM: TestModel = {
        property1: "wraithlight",
        property2: 33
    };
    let service: FifoStackService<TestModel>;

    describe("given the service is initialized", () => {

        service = new FifoStackService();

        describe("when i set an item", () => {
            beforeAll(() => {
                service.set(MOCK_ITEM);
            });

            describe("then i check if there are any items", () => {
                let result: boolean;
                beforeEach(() => {
                    result = service.hasAny();
                });

                it("should be true", () => {
                    expect(result).toBe(true);
                });

            });

            describe("then i get the next item", () => {
                let result1: TestModel;
                let result2: boolean;

                beforeEach(() => {
                    result1 = service.getNext();
                    result2 = service.hasAny();
                });

                it("should return the mock item", () => {
                    expect(result1).toBe(MOCK_ITEM);
                });

                it("should not have any items", () => {
                    expect(result2).toBe(false);
                });
            });
        });

    });

});
