import { Predicate } from "../predicate";
import { getPropertyName } from "./get-property-name.fn";

const PROP_NAME = "property";

interface TestInterface {
  [PROP_NAME]: string;
}

const TEST_OBJECT: TestInterface = {
  [PROP_NAME]: "wraithlight"
}

describe("getPropertyNameSpecs", () => {

  const predicate: Predicate<TestInterface, typeof TEST_OBJECT.property> = (m) => m.property;

  describe("given the utility is initialized", () => {
    describe("when i call the function with a valid predicate", () => {
      let propName: string;
      beforeEach(() => {
        propName = getPropertyName(predicate);
      });
      it("should return the correct property name", () => {
        expect(propName).toStrictEqual(PROP_NAME);
      });
    });
  });


});
