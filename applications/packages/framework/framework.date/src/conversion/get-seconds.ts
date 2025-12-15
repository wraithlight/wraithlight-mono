import { MS_IN_SEC } from "./get-seconds.const";

export function getSeconds(seconds: number): number {
  return seconds * MS_IN_SEC;
}
