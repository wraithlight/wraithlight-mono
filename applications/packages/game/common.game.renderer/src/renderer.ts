import { Nullable } from "@wraithlight/core.types";
import { Color, Position, Sprite } from "@wraithlight/core.game.core";

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
        sprite: Sprite,
        position: Position
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
