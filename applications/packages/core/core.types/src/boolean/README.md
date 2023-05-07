## coerceBoolean(booleanLike)
Coerces any value to its boolean representation.

### Usage
```ts

import { coerceBoolean } from "@wraithlight/core.types";

const val0 = coerceBoolean(false);              // false
const val1 = coerceBoolean(true);               // true
const val2 = coerceBoolean(null);               // false
const val3 = coerceBoolean(undefined);          // false

```

## randomBoolean()
Generates a random boolean value.

### Usage
```ts

import { randomBoolean } from "@wraithlight/core.types";

const val = randomBoolean();

```
