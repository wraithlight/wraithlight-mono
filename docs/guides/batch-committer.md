## How to use `batch-committer`

This repository contains a file called `batch-commiter.sh`. The purpose of the file is to allow the developers to commit multiple files individually with the same commit message.

It is useful, when batch changes were made like:
* tsconfig alignments
* packagejson modifications
* webpack config modifications
* eslint config aligments
* jest config alignments

**How to use the given file?**

Before you start, please make sure that you're in the root folder of the repository.

```sh

sh batch-committer.sh "<type>(<scope>): <message>

Ref: #<referenceId>"

```
