import { isNil } from "@wraithlight/core.nullable";

export function createUrl(
    baseUrl: string,
    port?: number
): string {
    return isNil(port)
        ? baseUrl
        : `${baseUrl}:${port}`
    ;
}
