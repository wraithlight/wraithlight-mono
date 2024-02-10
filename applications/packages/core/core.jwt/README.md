## core.jwt
Utility types.

```ts

import { CoreJWT } from "@wraithlight/core.jwt";

const jwtPayload: T = {}
const iv = "aaaaaaaaaaaaaaaa";                          // 16 bits
const key = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";         // 32 bits
const secret = "my-secret";                             // string
const expiry = 60;                                      // number

const token = CoreJWT.encrypt(                          // string   
    jwtPayload,
    iv,
    key,
    secret,
    expiry
);

const payload = CoreJWT.decrypt<T>(
    token,
    iv,
    key
);


```
