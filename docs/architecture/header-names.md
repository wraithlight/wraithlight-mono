## Header Names

### Table of Contents
- [Header Names](#header-names)
  - [Table of Contents](#table-of-contents)
  - [X-WL-SESSION-TOKEN](#x-wl-session-token)
  - [X-WL-API-TOKEN](#x-wl-api-token)
  - [X-WL-IS-BOT](#x-wl-is-bot)
  - [X-WL-SSR-ENABLED @deprecated](#x-wl-ssr-enabled-deprecated)
  - [X-WL-CORRELATION-ID](#x-wl-correlation-id)
  - [X-WL-RT-TOKEN](#x-wl-rt-token)

---

### X-WL-SESSION-TOKEN
This token is used to identify the session based on a JSON Web Token. The token contains the principal's ID (used in user management microservice) and the scope of the given token (`ApplicationId`) enum.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const sessionToken = req.headers[HeaderName.SessionToken];

```

---

### X-WL-API-TOKEN
This token is used to verify that the given caller microservice has access to the requested endpoint on the target microservice. Used when a mciroservice<>microservice communication happens. On requestor side a single access token should be declared, but on receiver side an array of tokens are listed, to help transactional changes on the access tokens.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const apiToken = req.headers[HeaderName.ApiToken];

```

---

### X-WL-IS-BOT
This token is used to identify if the given request is coming from a bot scraper. The header is being added by a global (app level) middleware.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const botToken = req.headers[HeaderName.IsBot];

```
---

### X-WL-SSR-ENABLED @deprecated
This heades is used to determine if the SSR functionality is enabled or disabled.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const ssrEnabled = req.headers[HeaderName.IsSsrEnabled];

```
---

### X-WL-CORRELATION-ID
This header is used to uniquely identifiy each incoming request per endpoint. This hedaer is being added by a global (app level) middleware. The value of this header is a valid UUIDv5 (GUID).

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const correlationId = req.headers[HeaderName.CorrelationId];

```
---

### X-WL-RT-TOKEN
This header is used to authorize the user when connecting to the realtime server. This header is being added by tha client.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const realtimeToken = req.headers[HeaderName.RealtimeToken];

```

---
