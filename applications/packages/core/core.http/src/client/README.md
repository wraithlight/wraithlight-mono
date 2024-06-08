## `HttpClient`
Utility class to perform HTTP operations.

### Usage
```ts

import {
    HttpClient
} from "@wraithlight/core.http";

const url = "";
const data: unknown = "";
const service = new HttpClient();

service.get(url);
service.delete(url);
service.put(url, data);
service.post(url, data);

```
