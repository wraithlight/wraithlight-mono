jest.mock("@wraithlight/game.renderer", () => {
    return {
        Renderer: jest.fn().mockImplementation(() => {
            return {
                useCanvas: jest.fn()
            }
        })
    }
});

import { Renderer } from "@wraithlight/game.renderer";

import { Layer } from "./layer";

describe("LayerSpecs", () => {

    // eslint-disable-next-line no-restricted-globals
    const MOCK_CANVAS = document.createElement("canvas");
    let layer: Layer;

    describe("given the service is initialized", () => {

        layer = new Layer(MOCK_CANVAS);

        it("should have created a renderer instance", () => {
            expect(Renderer).toHaveBeenCalled();
            expect(Renderer).toHaveBeenCalledTimes(1);
        });

        it("should have set the canvas to the renderer", () => {
            expect(layer["_renderer"].useCanvas).toHaveBeenCalled();
            expect(layer["_renderer"].useCanvas).toHaveBeenCalledTimes(1);
            expect(layer["_renderer"].useCanvas).toHaveBeenCalledWith(MOCK_CANVAS);
        });

    });

});
