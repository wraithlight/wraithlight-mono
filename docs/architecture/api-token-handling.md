## API Token Handling

The communication between microservices are secured with so-called API Tokens.
These tokens are sent by the caller and validated by the callee.

The header `X-WL-API-TOKEN` contains a valid API token (usually a `Guid`);

The handling contains the following layers:
* the caller must be able to access to a single token only
* the callee must be able to access all of the callers tokens - as well multiple tokens can be assigned to a single caller (rotation)
* these tokens must be validated before controller layer

To add the respective configuration:

On server config level this must be added to the config type (caller):

```ts

apiTokens: {
  tenantName: string
}

```

On server config level this must be added to the config type (callee):

```ts

allowedApiTokens: ReadonlyArray<string>;

```

Then on callee side a constant can read the API tokens:

```ts

import { ConfigReader } from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";

const reader = ConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;
export const VALID_API_TOKENS = reader
  .tryGet<ReadonlyArray<string>>(m => m.allowedApiTokens, [])
;

```

And it can be used within the `WithValidApiToken` decorator

```ts

@WithValidApiToken(VALID_API_TOKENS)

```

**IMPORTANT**
* `allowedApiTokens` and `apiTokens.tenantName` must contain the same value