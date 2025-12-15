import {
  isNil
} from "@wraithlight/framework.nullable";

export class CanvasService {

  private isLocked = false;
  private readonly _context: CanvasRenderingContext2D;

  constructor(
    canvas: HTMLCanvasElement
  ) {
    const context = canvas.getContext("2d");
    if (isNil(context)) {
      throw `Context is nil!`;
    }
    this._context = context;
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
      startX,
      startY,
      endX - startX,
      endY - startY
    );
  }

  public drawImage(
    _startX: number,
    _startY: number,
  ): void {
    if (this.isLocked) {
      return;
    }
  }

}
