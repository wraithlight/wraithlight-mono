import { LayerService } from "@wraithlight/core.game.layer";
import { Color } from "@wraithlight/core.game.types";

export class SceneService {

    private readonly _layerService: LayerService;

    constructor(
        private readonly _canvas: HTMLCanvasElement
    ) {
      this._layerService = new LayerService(_canvas);
    }

    public renderLoginScene(): void {
        this._layerService.reset();
        const background = this._layerService.addLayer();

        background.fillColor(
            { x: 0, y: 0 },
            { x: this._canvas.width, y: this._canvas.height },
            Color.MISSING_TEXTURE
        );
    }

    public renderLoadingScene(): void {
        this._layerService.reset();
    }

    public renderCharacterSelectionScene(): void {
        this._layerService.reset();
    }

    public renderGameScene(): void {
        this._layerService.reset();
    }

}
