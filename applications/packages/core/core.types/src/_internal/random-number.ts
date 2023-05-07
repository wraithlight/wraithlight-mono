export function randomNumberBetween(
    min: number = 0,
    max: number = 1
): number {
    if (max < min) {
        throw "Minimum value shoule be bigger than maximum value!";
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}
