## common.package-info.sdk-server
A library to read a package's `package.json` file.

### Usage
```ts

import {
    PackageJsonReader
} from "@wraithlight/common.package-info.sdk-server";
import {
    LoggerService
} from "@wraithlight/common.logger.sdk";

const logger = LoggerService.getInstance();
const service = new PackageJsonReader(
    "package.json",
    logger,
    "default-name",
    "default-version"
);
const { name, version } = service.getPackageJsonInfo();

```
