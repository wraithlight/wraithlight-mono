export function intersection<T>(
  left: ReadonlyArray<T>,
  right: ReadonlyArray<T>
): ReadonlyArray<T> {
  return left.filter(m => right.includes(m));
}
