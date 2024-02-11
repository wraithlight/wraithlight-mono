Dedicated to Kevin V. @ Gozo - i love you

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
| [![Database GHA - Build](https://github.com/wraithlight/wraithlight-mono/actions/workflows/db-build.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/db-build.yaml) |

### Applications
| Build | Lint  | Tests |
| :-:   | :-:   | :-:   |
| [![Applications GHA - Build](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-build.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-build.yaml) | [![Applications GHA - Lint](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-lint.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-lint.yaml) | [![Applications GHA - Test](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-test.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-test.yaml)

### Chore
| JSON Schema   | Knip  |
| :-:           | :-:   |
| [![Applications GHA - JSON Schema](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-jsonschema.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-jsonschema.yaml) | [![Applications GHA - Knip](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-knip.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-knip.yaml) |

## Links

### Documentation
* [APP Urls](./docs/urls/apps.md)
* [Tool Urls](./docs/urls/tools.md)
* [Database Urls](./docs/urls/database.md)
* [Port Mapping](./docs/urls/port-mapping.md)
* [Environment variables](./docs/env-vars.md)

### Guides
* [How to use the test-reporter](./docs/guides/test-reports.md)
* [How to check hidden files on Mac](./docs/guides/show-hidden-folders-on-mac.md)
* [How to clean up your local docker cache](./docs/guides/docker-cleanup.md)
* [How to check what uses the given port (MAC)](./docs/guides/how-to-check-used-port.md)
* [How to kill a process by PID (MAC)](./docs/guides/how-to-kill-a-process.md)

### Utils
* [`purge.sh`](./docs/utils/purge-sh.md)
* [`purge-git.sh`](./docs/utils/purge-git-sh.md)
* [`purge-branch.sh`](./docs/utils/purge-branch.sh.md)

## Getting started

**Requirements**
* Docker
* Node >= 18

The section will explain all the required steps to set up your local/dev environment. Please follow the steps propely.

### Hosts patch
Since most of the applicaions are using valid URLs instead IP addresses/localhost we have to set up our mock DNS server on the machine itself. This is being done by modifying the `hosts` file.

```sh
# Initialize local environment

gh repo clone wraithlight/wraithlight-mono
cd wraithlight
sudo node .scripts/patch-hosts.mjs

```

### Databases
Currently all of the databases are running in docker containers. The databases are using MySQL and there is a way to setup a phpmyadmin instance for utility. See the related documentation [here](./docs/guides/how-to-phmyadmin.md).

```sh
# To run everything locally

gh repo clone wraithlight/wraithlight-mono
cd wraithlight/database
sh ./build.sh # to build the databases
sh ./run.sh   # to run them in docker

```

### Applications

```sh
# Set up the local environment

gh repo clone wraithlight/wraithlight-mono
cd wraithlight/applications
yarn

```


## Tecnologies we use
This section lists all the technologies that are included in this repository.

### Frontend
| Status              | Application       | Technology    |
|:-:                  |:-:                |:-:            |
| :recycle:           | Website           | Angular       |
| :recycle:           | Forum             | React         |
| :recycle:           | Content           | Mithril       |
| :recycle:           | Editor            | Vue           |
| :recycle:           | Game rich client  | Electron      |
| :recycle:           | Game thin client  | Knockout      |
| :recycle:           | Logs              | Aurelia       |
| :recycle:           | Auth              | Svelte        |
| :recycle:           | Notifier          | QWIK          |
| :recycle:           | Remote Config     | Lit           |

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
| :recycle:           | Remote Config     | Node          |


## Database
All of the databases are using MySQL, with a custom ORM, called `core.orm`.

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