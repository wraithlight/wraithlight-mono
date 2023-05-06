import {
    Nullable
} from "@wraithlight/core.types";

export class CanvasService {

    private isLocked = false;
    private readonly _context: Nullable<CanvasRenderingContext2D>;

    constructor(
        canvas: HTMLCanvasElement
    ) {
        this._context = canvas.getContext("2d");
    }

    public dispose(): void {
        this.isLocked = true;
    }

    public drawRectangle(
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        color: string
    ): void {
        if (this.isLocked) {
            return;
        }
        this._context.fillStyle = color;
        this._context.fillRect(
            startX, startY,
            endX - startX,
            endY - startY
        );
    }

    public drawImage(
        startX: number,
        startY: number,
    ): void {
        if (this.isLocked) {
            return;
        }
    }

}
