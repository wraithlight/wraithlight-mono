jest.mock("@wraithlight/game.layer", () => {
    return {
        LayerService: jest.fn().mockImplementation(() => {
            return {
                reset: jest.fn().mockImplementation(() => ({
                    fillColor: jest.fn()
                })),
                addLayer: jest.fn()
            }
        })
    }
})

import { LayerService } from "@wraithlight/game.layer";

import { SceneService } from "./scene.service";

describe("SceneServiceSpecs", () => {

    // eslint-disable-next-line no-restricted-globals
    const MOCK_CANVAS = document.createElement("canvas");
    let service: SceneService;

    describe("given the service is initialied", () => {
        beforeAll(() => {
            service = new SceneService(MOCK_CANVAS);
        });

        it("should create a new `LayerService` instance", () => {
            expect(LayerService).toHaveBeenCalled();
            expect(LayerService).toHaveBeenCalledTimes(1);
        });
    });
});
