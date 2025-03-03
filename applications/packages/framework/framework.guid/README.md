## framework.guid
Utilities to perform actions with UUIDv4 Guids.

### Usage
```ts

import {
    Guid,
    isGuid,
    newGuid
} from "@wraithlight/framework.guid";

let guid: Guid;
guid = newGuid();
const isGuid = isGuid(guid);            // true
const isGuid2 = isGuid("not-a-guid");   // false

```
