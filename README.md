---

<p align="center">
  <i>
    ...beneath the waves, a Raven's spirit tamed,<br>
    by bald Kraken's care, their destinies named.<br>
    Ambition's lure, a betrayal's cruel rhyme,<br>
    dreams embraced, yet Kraken's love the true treasure of time...<br>
  </i>
</p>

---


# wraithlight
An open-source fanatasy pirate based ORPG game. The purposes of this repository:
* follow my teenager dream and write a computer game
* follow my senior/architect dream and create a whole platform
* have a monorepo for all of my hobbyprojects
* learn all about platform architecting

This repository is the 8th generatorion of the previous platform larvas (`raptyle`, `vampyre`, `silver-arrow`, `dnf`, `dnf-mono`, `dnf2`, `nexus-reunion`). Some of the code has been merged from them, but most of the current codebase was written inside the repository.

## Status

### Database
| Build |
| :-:   |
| [![Database GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/db-build.yaml) |

### Applications
| Build | Lint  | Tests |
| :-:   | :-:   | :-:   |
| [![Applications GHA - Build](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-build.yaml) | [![Applications GHA - Lint](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-lint.yaml) | [![Applications GHA - Test](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-test.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-test.yaml)

### Chore
| JSON Schema   | Knip  |
| :-:           | :-:   |
| [![Applications GHA - JSON Schema](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-jsonschema.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-jsonschema.yaml) | [![Applications GHA - Knip](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-knip.yaml/badge.svg)](https://github.com/kfarkasHU/wraithlight/actions/workflows/apps-knip.yaml) |

## Links

### Documentation
* [APP Urls](./docs/urls/apps.md)
* [Tool Urls](./docs/urls/tools.md)
* [Database Urls](./docs/urls/database.md)
* [Port Mapping](./docs/urls/port-mapping.md)

### Guides
* [How to use the test-reporter](./docs/guides/test-reports.md)

### Utils
* [`purge.sh`](./docs/utils/purge-sh.md)
* [`purge-git.sh`](./docs/utils/purge-git-sh.md)
* [`purge-branch.sh`](./docs/utils/purge-branch.sh.md)

## Getting started

**Requirements**
* Docker
* Node >= 18

```sh
# Initialize local environment

gh repo clone kfarkasHU/wraithlight
cd wraithlight
sudo node .scripts/patch-hosts.mjs

```

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
| Status              | Application       | Technology    |
|:-:                  |:-:                |:-:            |
| :recycle:           | Website           | Node          |
| :recycle:           | Forum             | Node          |
| :recycle:           | Content           | Node          |
| :recycle:           | Editor            | Node          |
| :recycle:           | Game rich client  | Node          |
| :recycle:           | Game thin client  | Node          |
| :recycle:           | Logs              | Node          |
| :recycle:           | Auth              | Node          |
| :white_check_mark:  | Notifier          | Node          |


## Database
All of the databases are using MySQL, with a custom ORM, called `core.sql`.

## Other technologies used
* Docker
* Socket.IO
* SASS
* webpack
* typescript
* lerna
* Jest
* Knip
* selenium
* swagger