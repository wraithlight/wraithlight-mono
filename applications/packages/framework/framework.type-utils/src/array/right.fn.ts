export function right<T>(
  left: ReadonlyArray<T>,
  right: ReadonlyArray<T>
): ReadonlyArray<T> {
  return right.filter(m => !left.includes(m));
}
