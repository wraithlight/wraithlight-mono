import * as crypto from "crypto";

export function randomNumberBetween(
    min: number = 0,
    max: number = 1
): number {
    if (max < min) {
        throw "Minimum value should be bigger than maximum value!";
    }
    return Math.floor(cryptoRandom() * (max - min + 1) + min)
}

function cryptoRandom(): number {
    if (hasNodeCrypto()) {
        return nodeCrypto0and1();
    }
    if (hasBrowserCrypto()) {
        return browserCrypto0an1();
    }
    throw `No crypto was found!`;
}

function hasNodeCrypto(): boolean {
    return !!(crypto && crypto.randomInt);
}

function nodeCrypto0and1(): number {
    return crypto.randomInt(0, 1);
}

function hasBrowserCrypto(): boolean {
    return !!(crypto && crypto.getRandomValues);
}

function browserCrypto0an1(): number {
    const randomBuffer = new Uint32Array(1);
    return crypto.getRandomValues(randomBuffer)[0] / (0xffffffff + 1);
}
