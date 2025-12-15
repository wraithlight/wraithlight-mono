export function randomNumberBetween(
  min = 0,
  max = 1
): number {
  if (max < min) {
    throw "Minimum value should be bigger than maximum value!";
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
