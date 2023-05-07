## `Nullable<T>`
Represents any nullable type that can be `T`, `null` or `undefined`.

### Usage
```ts

import { Nullable } from "@wraithlight/core.types";

let booleanLike: Nullable<boolean>;
booleanLike = true;
booleanLike = false;
booleanLike = null;
booleanLike = undefined;

```

## `isNil(valueLike)
Checks if the given value is `null` or `undefined`

### Usage
```ts

import { isNil } from "@wraithlight/core.types";

const val0 = isNil(false);      // false
const val1 = isNul(null);       // true

```
