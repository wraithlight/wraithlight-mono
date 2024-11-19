## Header Names

### Table of Contents
- [Header Names](#header-names)
  - [Table of Contents](#table-of-contents)
  - [X-WL-SESSION-TOKEN](#x-wl-session-token)
  - [X-WL-API-TOKEN](#x-wl-api-token)
  - [X-WL-IS-BOT](#x-wl-is-bot)
  - [X-WL-SSR-ENABLED](#x-wl-ssr-enabled)
  - [X-WL-CORRELATION-ID](#x-wl-correlation-id)
  - [X-WL-RT-TOKEN](#x-wl-rt-token)

---

### X-WL-SESSION-TOKEN
This session is used to identify the session based on a JSON Web Token. The token contains the principal's ID (used in auth microservice) and the scope of the given token (`ApplicationId`) enum.

Usage:

```ts

import { HeaderName } from "@wraithlight/domain.http.constants";

const sessionToken = req.headers[HeaderName.SessionToken];

```

---

### X-WL-API-TOKEN

---

### X-WL-IS-BOT

---

### X-WL-SSR-ENABLED

---

### X-WL-CORRELATION-ID

---

### X-WL-RT-TOKEN

---
