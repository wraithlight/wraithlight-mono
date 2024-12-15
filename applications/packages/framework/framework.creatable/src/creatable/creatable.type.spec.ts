import { Creatable } from "./creatable.type";

const MOCK_KEY = "object-key";

class MockClass {
  public readonly key = MOCK_KEY;
}

function factory<T>(fact: Creatable<T>): T {
  return new fact();
}

describe("CreatableSpecs", () => {
  let obj: MockClass;
  describe("given i have a Creatable object", () => {
    describe("when i create it", () => {
      beforeEach(() => {
        obj = factory(MockClass);
      });
      it("should return the new object", () => {
        expect(obj).toBe(Object);
        expect(obj.key).toBe(MOCK_KEY);
        expect(typeof obj).toBe(MockClass);
      });
    });
  });
});
