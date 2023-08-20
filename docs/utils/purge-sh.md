## `purge.sh`
This script is used to clean all the `yarn` related files.
It removes the following folders (recursively) and files:
* `node_modules`
* `dist`
* `yarn.lock`

The script is useful when a non-reproducable error occours during deployment CI/CD, or just a regular local env cleanup.

**Usage**
```sh

gh repo clone kfarkasHU/wraithlight
cd wraithlight/applications
sh purge.sh

```
