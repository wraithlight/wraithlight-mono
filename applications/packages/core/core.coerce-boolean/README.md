# core.coerce-boolean

This package is used to coerce an unkown value ot its boolean representation.

**Exports:**
* `coerceBoolean(booleanLike: unknown): boolean`

**Usage:**

```ts

import { coerceBoolean } from "@wraitghlight/core.coerce-boolean";

const valueLike1 = "";
const boolValue1 = coerceBoolean(valueLike1);       // false

const valueLike2 = "false";
const boolValue2 = coerceBoolean(valueLike1);       // true

```
