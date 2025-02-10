# @wraithlight/tools.fcopy.base
A utility package to copy a file.

**Usage**

```ts

import { fileCopy } from "@wraithlight/tools.fcopy.base";

fileCopy(
  "package.json",
  "_package.json",
  (content) => {
    const jsonContent = JSON.parse(content);
    jsonContent.author = "wraithlight team";
    return JSON.stringify(jsonContent, undefined, 2);
  }
);

```
