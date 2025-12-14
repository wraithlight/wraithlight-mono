import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

export class Timer {
  private _startTime: number | undefined = GLOBAL_UNDEFINED;

  public start(): void {
    this._startTime = performance.now();
  }

  public current(): number {
    return this.currentCore();
  }

  public stop(): number {
    this._startTime = GLOBAL_UNDEFINED;
    return this.currentCore();
  }

  private currentCore(): number {
    if (!this._startTime) {
      return 0;
    }
    const now = performance.now();
    return now - this._startTime;
  }

}
