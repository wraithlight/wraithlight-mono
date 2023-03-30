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
