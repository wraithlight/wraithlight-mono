## How to generate GUIDs (UUIDv4)
The repository contains a package that is used to generate and validate guids runtime.


```sh

gh repo clone wraithlight/wraithlight-mono
cd wraithlight-mono/applications
yarn
yarn guid [n?]

# [n?] is a numeric flag that represents the number of GUIDs to be generated.
# Examples:
# * yarn guid       - to generate a single guid
# * yarn guid 5     - to generate five guids

```
