import { MS_IN_SEC } from "./get-seconds.const";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function getSeconds(seconds: number): number {
    return seconds * MS_IN_SEC;
}
