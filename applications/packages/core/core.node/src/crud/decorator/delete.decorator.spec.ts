jest.mock("./http.decorator", () => {
  return {
    HttpDecorator: jest.fn()
  }
})

import { HttpDecorator } from "./http.decorator";
import { HttpDelete } from "./delete.decorator";

describe("HttpDeleteSpecs", () => {

  const MOCK_PATH = "wraithlight/test";
  const decorator = HttpDelete;

  describe("given the decorator is initalized", () => {

    const _result = decorator(MOCK_PATH);

    it("should call the underlying HttpDecorator function", () => {
      expect(HttpDecorator).toHaveBeenCalled();
      expect(HttpDecorator).toHaveBeenCalledTimes(1);
      expect(HttpDecorator).toHaveBeenCalledWith("DELETE", MOCK_PATH);
    });


  });

});
