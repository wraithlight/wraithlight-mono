import { Color, Position, Sprite } from "@wraithlight/game.contract";

import { CanvasService } from "./service";

export class Renderer {

    private _canvasService: CanvasService;

    public useCanvas(
        canvas: HTMLCanvasElement
    ): void {
        if (!this._canvasService) {    
            this._canvasService = new CanvasService(canvas);
        }
    }

    public dispose(): void {
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
        this._canvasService.drawRectangle(
            from.x, from.y,
            to.x, to.y,
            color
        );
    }

}
