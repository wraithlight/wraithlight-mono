jest.mock("./service", () => {
  return {
    CanvasService: jest.fn()
  }
});

import { CanvasService } from "./service";
import { Renderer } from "./renderer";

describe("RendererSpecs", () => {

  // eslint-disable-next-line no-restricted-globals
  const MOCK_CANVAS = document.createElement("canvas");
  let service: Renderer;

  describe("given the service is initialized", () => {

    service = new Renderer();

    describe("when i call `useCanvas`", () => {

      beforeEach(() => {
        service.useCanvas(MOCK_CANVAS);
      });

      it("should create a new `CanvasService`", () => {
        expect(CanvasService).toHaveBeenCalled();
        expect(CanvasService).toHaveBeenCalledTimes(1);
        expect(CanvasService).toHaveBeenCalledWith(MOCK_CANVAS);
      });
    });
  });
});
