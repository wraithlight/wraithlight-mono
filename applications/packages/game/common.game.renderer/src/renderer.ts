import { Color } from "@wraithlight/core.game.const";
import { Position, Sprite } from "@wraithlight/core.game.types";
import { Nullable } from "@wraithlight/core.nullable";

import { CanvasService } from "./service";

export class Renderer {

    private _canvasService: Nullable<CanvasService>;

    public useCanvas(
        canvas: HTMLCanvasElement
    ): void {
        if (!this._canvasService) {
            this._canvasService = new CanvasService(canvas);
        }
    }

    public dispose(): void {
        if (!this._canvasService) {
            throw "The renderer needs to be initialized!";
        }
        this._canvasService.dispose();
    }

    public renderSprite(
        _sprite: Sprite,
        _position: Position
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ): void {

    }

    public fillColor(
        from: Position,
        to: Position,
        color: Color
    ): void {
        if (!this._canvasService) {
            throw "The renderer needs to be initialized!";
        }
        this._canvasService.drawRectangle(
            from.x, from.y,
            to.x, to.y,
            color
        );
    }

}
