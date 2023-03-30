import { randomNumberBetween } from "../_internal";

export function generateRandomString(
    length: number,
    alphabet: Array<string>
): string {
    const letters = alphabet.join("");
    const result: Array<string> = [];
    for (let i = 0; i < length; i++) {
        const index = randomNumberBetween(0, letters.length);
        result.push(letters[index]);
    }
    return result.join("");
}
