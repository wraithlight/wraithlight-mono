jest.mock("./http.decorator", () => {
  return {
    HttpDecorator: jest.fn()
  }
})

import { HttpDecorator } from "./http.decorator";
import { HttpGet } from "./get.decorator";

describe("HttpGetSpecs", () => {

  const MOCK_PATH = "wraithlight/test";
  const decorator = HttpGet;

  describe("given the decorator is initalized", () => {

    const _result = decorator(MOCK_PATH);

    it("should call the underlying HttpDecorator function", () => {
      expect(HttpDecorator).toHaveBeenCalled();
      expect(HttpDecorator).toHaveBeenCalledTimes(1);
      expect(HttpDecorator).toHaveBeenCalledWith("GET", MOCK_PATH);
    });


  });

});
