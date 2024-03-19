## `@wraithlight/common.content.sdk`

### Exports:
* `ContentService`

### Usage:

#### `ContentService`

```ts

const baseUrl = "http://localhost";
const apiToken = "token-1";
const service = new ContentService(baseUrl, token);

const singleKey = await service.getSingleKey(
    "key",
    Language.English
);

const multiKey = await service.getAppKeys(
    ApplicationId.Content,
    Language.English
);

```