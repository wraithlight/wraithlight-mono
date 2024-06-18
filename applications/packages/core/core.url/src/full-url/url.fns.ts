export function createFullUrl(
    baseUrl: string,
    ...path: Array<string>
): string {
    const paths = path.map(m => m.startsWith("/") ? m : `/${m}`);
    return baseUrl.concat(paths.join(""));
}
