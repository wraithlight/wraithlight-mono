# wraithlight
An open-source fanatasy pirate based ORPG game.

## Status
| Database       | Applications    | Lint |
|:-:                |:-:            | :-: |
| [![Database GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml) | [![Applications GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml) | [![Applications GHA - Lint](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml) |

## Links
* [APP Urls](./docs/urls/apps.md)
* [Database Urls](./docs/urls/database.md)

## Tecnologies we use
This section lists all the technologies that are included in this repository.

### Frontend
| Application       | Technology    |
|:-:                |:-:            |
| Website           | Angular       |
| Forum             | React         |
| Content           | Mithril       |
| Editor            | Vue           |
| Game rich client  | Electron      |
| Game thin client  | Knockout      |
| Logs              | Aurelia       |
| User Management   | Ember         |

## Backend
Most of the backend libraries/applications are written in NodeJS with some custom utility libraries such as `node.core`.

## Database
All of the databases are using MySQL, with a custom ORM, called `core.sql`.

## Other technologies used
* Docker
* Kubernetes
* Socket.IO
* rxjs
* ngrx
* SASS
* webpack
* typescript
* lerna
