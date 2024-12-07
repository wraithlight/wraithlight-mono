import { WraithlightError } from "./_wraithlight.error";

export function isWraithlightError(e: Error): e is WraithlightError {
  return e.message.includes("WL_MESSAGE");
}
