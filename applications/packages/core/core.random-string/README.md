## generateRandomString(length, alphabet[])
Generates a random string specified by the length and the alphabet array.

### Usage
```ts

import {
    generateRandomString,
    LOWERCASE_ALPHABET,
    UPPERCASE_ALPHABET,
    NUMBER_ALPHABET
} from "@wraithlight/core.random-string";

const randomString = generateRandomString(
    10,
    [
        LOWERCASE_ALPHABET,
        UPPERCASE_ALPHABET,
        NUMBER_ALPHABET
    ]
);

```
