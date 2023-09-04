import { Nullable } from "@wraithlight/core.types";
import { SceneService } from "@wraithlight/core.game.scene";

export class GameContextService {

    private _sceneService: Nullable<SceneService>;

    public initGame(
        canvas: HTMLCanvasElement,
        sessionToken: string
    ): void {
        if (!this._sceneService) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            this._sceneService = new SceneService(canvas);
        }
        this._sceneService.renderLoginScene();
    }

}
