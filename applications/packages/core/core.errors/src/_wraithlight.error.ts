import { WL_MESSAGE } from "./_wraithlight.const";

export abstract class WraithlightError extends Error {
  public abstract readonly statusCode: number;
  public abstract readonly statusMessage: string;

  constructor(
    type: string,
    message: string,
  ) {
    super(`${WL_MESSAGE}::${type}\n${message}`);
  }
}
