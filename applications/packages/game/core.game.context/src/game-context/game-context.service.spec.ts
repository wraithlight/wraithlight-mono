jest.mock("@wraithlight/core.game.scene", () => {
    return {
        SceneService: jest.fn().mockImplementation(() => {
            return {
                renderLoginScene: jest.fn()
            }
        })
    }
});

import { SceneService } from "@wraithlight/core.game.scene";

import { GameContextService } from "./game-context.service";

describe("GameContextServiceSpecs", () => {

    // eslint-disable-next-line no-restricted-globals
    const MOCK_CANVAS = document.createElement("canvas");
    let service: GameContextService;

    describe("given the service is initialized", () => {
        
        service = new GameContextService();

        describe("when i call `initGame()` function", () => {
            beforeEach(() => {
                service.initGame(MOCK_CANVAS, "empty-token");
            });

            it("should create a new `SceneService`", () => {
                expect(SceneService).toHaveBeenCalled();
                expect(SceneService).toHaveBeenCalledTimes(1);
                expect(SceneService).toHaveBeenCalledWith(MOCK_CANVAS);
            });

        });
    });

});
