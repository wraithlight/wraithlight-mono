# wraithlight
An open-source fanatasy pirate based ORPG game.

## Status
| Database       | Applications    | Lint |
|:-:                |:-:            | :-: |
| [![Database GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml) | [![Applications GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml) | [![Applications GHA - Lint](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml) |

## Links
* [APP Urls](./docs/urls/apps.md)
* [Tool Urls](./docs/urls/tools.md)
* [Database Urls](./docs/urls/database.md)

## Getting started

**Requirements**
* Docker
* Node >= 18

```sh
# Set up the local environment

gh repo clone kfarkasHU/wraithlight
cd wraithlight/applications
yarn

```

```sh
# To run everything locally

cd wraithlight/database
./build.sh
cd applications/database
yarn watch

```

## Tecnologies we use
This section lists all the technologies that are included in this repository.

### Frontend
| Status    | Application       | Technology    |
|:-:        |:-:                |:-:            |
| :recycle: | Website           | Angular       |
| :recycle: | Forum             | React         |
| :recycle: | Content           | Mithril       |
| :recycle: | Editor            | Vue           |
| :recycle: | Game rich client  | Electron      |
| :recycle: | Game thin client  | Knockout      |
| :recycle: | Logs              | Aurelia       |
| :recycle: | Auth              | Svelte        |

## Backend
Most of the backend libraries/applications are written in NodeJS with some custom utility libraries such as `node.core`.
| Status    | Application       | Technology    |
|:-:        |:-:                |:-:            |
| :recycle: | Website           | Node          |
| :recycle: | Forum             | Node          |
| :recycle: | Content           | Node          |
| :recycle: | Editor            | Node          |
| :recycle: | Game rich client  | Node          |
| :recycle: | Game thin client  | Node          |
| :recycle: | Logs              | Node          |
| :recycle: | Auth              | Node          |


## Database
All of the databases are using MySQL, with a custom ORM, called `core.sql`.

## Other technologies used
* Docker
* Kubernetes
* Socket.IO
* SASS
* webpack
* typescript
* lerna
