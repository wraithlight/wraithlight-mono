import { isEmptyString } from "@wraithlight/core.nullable";

export function createFullUrl(
    baseUrl: string,
    ...path: Array<string>
): string {
  const paths = path.map(m => (isEmptyString(m) || m.startsWith("/"))
    ? m
    : `/${m}`)
  ;
  return baseUrl.concat(paths.join(""));
}
