import { Renderer } from "@wraithlight/common.game.renderer";
import { Color } from "@wraithlight/core.game.const";
import { Position, Sprite } from "@wraithlight/core.game.types";

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