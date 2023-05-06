import { Color, Position, Sprite } from "@wraithlight/game.contract";
import { Renderer } from "@wraithlight/game.renderer";

export class Layer {

    private readonly _renderer = new Renderer();

    constructor(
        canvas: HTMLCanvasElement
    ) {
        this._renderer.useCanvas(canvas);
    }

    public renderSprite(
        sprite: Sprite,
        position: Position
    ): void {
        this._renderer.renderSprite(sprite, position);
    }

    public fillColor(
        from: Position,
        to: Position,
        color: Color
    ): void {
        this._renderer.fillColor(
            from,
            to,
            color
        );
    }

    public dispose(): void {
        this._renderer.dispose();
    }

}