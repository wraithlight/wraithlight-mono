## core.random-number
Utility function to generate a random number within a given range.

```ts

import { randomNumberBetween } from "@wraithlight/core.random-number";

const number1 = randomNumberBetween(10, 20);    // from 10 to 20, min and max included
const number2 = randomNumberBetween(10, 10);    // 10
const number3 = randomNumberBetween(20, 10);    // error

```
