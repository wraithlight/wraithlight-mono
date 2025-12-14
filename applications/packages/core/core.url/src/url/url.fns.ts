import { isNil } from "@wraithlight/framework.nullable";

/**
 * @deprecated Use the new ager api constants instead.
 */
export function createUrl(
  baseUrl: string,
  port?: number
): string {
  return isNil(port)
    ? baseUrl
    : `${baseUrl}:${port}`
    ;
}
