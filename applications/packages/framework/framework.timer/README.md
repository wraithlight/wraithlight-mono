## framework.timer

Exports:
* `Timer`

Usage:

```ts

import { Timer } from "@wraithlight/framework.timer";

const timer = new Timer();

timer.start();
// do some operations
const t1 = timer.current();
// do some other operations
const t2 = timer.current();
// do the last operations
const t3 = timer.stop();

```
