export function union<T>(
  left: ReadonlyArray<T>,
  right: ReadonlyArray<T>
): ReadonlyArray<T> {
  return Array.from(new Set([...left, ...right]));
}
