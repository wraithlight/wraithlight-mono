## `purge-git.sh`
This script is used to clean all the git ignored files from the local repository.
The script is useful when a non-reproducable error occours during deployment CI/CD, or just a regular local env cleanup.

**Usage**
```sh

gh repo clone kfarkasHU/wraithlight
cd wraithlight/applications
sh purge-git.sh

```
