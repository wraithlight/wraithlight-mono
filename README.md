Dedicated to
* Kevin V. @ Gozo - i love you
* G @ wine events - love the thing in yourself that you loved in me
* MDragon @ Cluster - the zone awaits
* OE @ Past - never forget; always forgive

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
| :---: |
|  N/A  |

### Applications
|                                                                                                     Build                                                                                                     |                                                                                                    Lint                                                                                                    |                                                                                                   Tests                                                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - Build](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-build.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-build.yaml) | [![Applications GHA - Lint](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-lint.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-lint.yaml) | [![Applications GHA - Test](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-test.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-test.yaml) |

|                                                                                                    UM Docker                                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - Docker UM](https://github.com/wraithlight/wraithlight-mono/actions/workflows/docker-um.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/docker-um.yaml) |

### Chore
|                                                                                                     `package.json` Schema                                                                                                     |                                                                                                             Swagger Schema                                                                                                             |                                                                                                          `tsconfig.json` Schema                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - JSON Schema](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-jsonschema.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-jsonschema.yaml) | [![Applications GHA - SWAGGER Schema](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-swaggerschema.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-swaggerschema.yaml) | [![Applications GHA - TSConfig Schema](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-tsconfigschema.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-tsconfigschema.yaml) |

|                                                                                                               `tsconfig.build.json` Schema                                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - TSConfig Build Schema](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-tsconfigbuildschema.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-tsconfigbuildschema.yaml) |


|                                                                                                    Knip                                                                                                    |                                                                                                           Yarn Lock                                                                                                            |                                                                                                            Readme Check                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - Knip](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-knip.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-knip.yaml) | [![Application GHA - Yarn Lock Changes](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-yarnlock.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-yarnlock.yaml) | [![Applications GHA - Readme Check](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-readme-check.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-readme-check.yaml) |

|                                                                                                       DEPLIST                                                                                                       |                                                                                                               Workspace Check                                                                                                               |                                                                                                      Shreif                                                                                                      |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Applications GHA - Deplist](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-deplist.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-deplist.yaml) | [![Applications GHA - Workspace Check](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-workspace-check.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-workspace-check.yaml) | [![Applications GHA - Sherif](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-sherif.yaml/badge.svg)](https://github.com/wraithlight/wraithlight-mono/actions/workflows/apps-sherif.yaml) |


## Links

### Documentation
* [APP Urls](./docs/urls/apps.md)
* [Tool Urls](./docs/urls/tools.md)
* [Database Urls](./docs/urls/database.md)
* [Port Mapping](./docs/urls/port-mapping.md)
* [Environment variables](./docs/env-vars.md)
* [Colors > Game](./docs/colors/game.md)

### Architecture
* [Communication methodologies](./docs/architecture/communication.md)
* [Server-side pagination](./docs/architecture/server-side-pagination.md)
* [Header names](./docs/architecture/header-names.md)
* [Package layers](./docs/architecture/package-layers.md)

### Guides
* [How to use the test-reporter](./docs/guides/test-reports.md)
* [How to check hidden files on Mac](./docs/guides/show-hidden-folders-on-mac.md)
* [How to clean up your local docker cache](./docs/guides/docker-cleanup.md)
* [How to check what uses the given port (MAC)](./docs/guides/how-to-check-used-port.md)
* [How to kill a process by PID (MAC)](./docs/guides/how-to-kill-a-process.md)
* [How to generate GUIDs](./docs/guides/guidgen.md)
* [How to reset your branch to origin](./docs/guides/git-reset-to-origin.md)
* [How to batch commit your changes](./docs/guides/batch-committer.md)

### Utils
* [`purge.sh`](./docs/utils/purge-sh.md)
* [`purge-git.sh`](./docs/utils/purge-git-sh.md)
* [`purge-branch.sh`](./docs/utils/purge-branch.sh.md)
* [`batch-committer.sh`](./docs/guides/batch-committer.md)

### Credentials
* [Credentials](./docs/credentials/README.md)
  * [Service users](./docs/credentials/service-users.md)

### User flows
* [User Management > Reset password (external)](./docs/flows/user-management/external-password-reset.md)
* [Communications > Email Sender](./docs/flows/communications/email-sender-service.md)
* [Communications > Notifier Proxy](./docs/flows/communications/notifier-proxy.md)
* [Communications > Push Sender](./docs/flows/communications/push-sender-service.md)
* [Communications > SMS Sender](./docs/flows/communications/sms-sender-service.md)

### API documentation
* [Common > Latency V1](./applications/.swadoc/common/latency/swagger.json)
* [Common > Healtcheck V2](./applications/.swadoc/common/health-check-v2/swagger.json)
* [Communications > Email Sender Service V1](./applications/.swadoc/communications/email-sender/swagger.json)
* [Communications > Notifier Proxy Service V1](./applications/.swadoc/communications/notifier-proxy/swagger.json)
* [Communications > Push Sender Service V1](./applications/.swadoc/communications/push-sender/swagger.json)
* [Communications > SMS Sender Service V1](./applications/.swadoc/communications/sms-sender/swagger.json)
* [User Management](./applications/apps/user-management/node/swagger.json)

## Getting started

**Requirements**
* Docker
* Node >= 18
* Python 3.11

The section will explain all the required steps to set up your local/dev environment. Please follow the steps propely.

### Hosts patch
Since most of the applications are using valid URLs instead IP addresses/localhost we have to set up our mock DNS server on the machine itself. This is being done by modifying the `hosts` file.

```sh
# Initialize local environment

gh repo clone wraithlight/wraithlight-mono
cd wraithlight-mono
sh init.sh
sudo node .scripts/patch-hosts.mjs

```

### Databases
Currently all of the databases are running in docker containers. The databases are using MySQL and there is a way to setup a phpmyadmin instance for utility. See the related documentation [here](./docs/guides/how-to-phmyadmin.md).

```sh
# To run everything locally

gh repo clone wraithlight/wraithlight-mono
cd wraithlight-mono/database
sh ./build.sh # to build the databases
sh ./run.sh   # to run them in docker

```

### Applications

```sh
# Set up the local environment

gh repo clone wraithlight/wraithlight-mono
cd wraithlight-mono/applications
yarn

```

## Scripts to use under `/applications`

```sh

nx                              - Utility script to add `nx` to the cli.
knip                            - Runs KNIP on the project.
lerna                           - Utility script to add `lerna` to the cli.
lint                            - Runs ESLint on the project.
lint:quiet                      - Runs ESLint on the project. Prints errors only.
build                           - Build everything.
build:changes                   - Build the changes since the local main only.
build:tools                     - Build the `tools.*` packages only.
build:prod                      - DEPRECATED - Production build.
build:guid                      - Build `core.guid` only.
postinstall                     - Utility script to build some packages after yarn install.
graph                           - Draw NX graph.
test                            - Runs jest on the project.
test:coverage                   - Runs jest on the project. Collect coverage per package.
test:mono                       - Runs jest on the monorepo.
validate-package-json           - Validates `package.json` files.
validate-swagger-json           - Validates `swagger.json` files.
validate-tsconfig-json          - Validates `tsconfig.json` files.
validate-tsconfig-build-json    - Validates `tsconfig.build.json` files.
guid                            - Generates a new guid.
test-report:collect             - Utility script for test-reporting. Runs jest.
test-report:generate            - Utility script for test-reporting. Runs custom parsing.
test-report:open                - Utility script for test-reporting. Opens the default browser.
test-report                     - Collects test-coverage, then opens the result in your browser.
precommit                       - Runs `yarn`, `lint`, `knip`, `build` and `test` on the repo.
apply-patches                   - Runs `node_modules` patches.
deplist                         - Checks for duplicate 3rd party dependencies. Optional flag: --silent
readme-check                    - Checks if the readmes are there and has proper title. Optional flag: --silent
validate-workspaces             - Check the workspace layouts. Optional flag: --silent
sherif                          - Runs sherif that check package.json files.
list:project-number             - Returns the number of projects within the nx monorepo.
theme:generate:all              - Generates all the themes.
theme:generate:content          - Generates the theme files for Content UI.
theme:generate:game-website     - Generates the theme files for Game Website UI.
theme:generate:notifier         - Generates the theme files for Notifier UI.
theme:generate:nps              - Generates the theme files for NPS UI.
theme:generate:user-management  - Generates the theme files for User Management UI.
theme:generate:website          - Generates the theme files for Website UI.

```

## Tecnologies we use
This section lists all the technologies that are included in this repository.

### Frontend
|       Status       |   Application    | Technology |
| :----------------: | :--------------: | :--------: |
|     :recycle:      |  Notifier Proxy  |    N/A     |
|     :recycle:      |    SMS Sender    |    N/A     |
|     :recycle:      |   Push Sender    |    N/A     |
|     :recycle:      |   Email Sender   |    N/A     |
|     :recycle:      |     Website      |  Angular   |
|     :recycle:      |      Forum       |   React    |
|     :recycle:      |     Content      |  Mithril   |
|     :recycle:      |      Editor      |    Vue     |
|     :recycle:      | Game rich client |  Electron  |
|     :recycle:      | Game thin client |  Knockout  |
|     :recycle:      |       Logs       |  Aurelia   |
|     :recycle:      | User Management  |   Svelte   |
|     :recycle:      |     Notifier     |    QWIK    |
|     :recycle:      |  Remote Config   |    Lit     |
| :white_check_mark: |   COMMS - SSS    |    N/A     |
| :white_check_mark: |   COMMS - ESS    |    N/A     |
| :white_check_mark: |   COMMS - NPS    |    N/A     |
| :white_check_mark: |   COMMS - PSS    |    N/A     |

## Backend
Most of the backend libraries/applications are written in NodeJS with some custom utility libraries such as `node.core`.
|       Status       |   Application    | Technology |
| :----------------: | :--------------: | :--------: |
|     :recycle:      |  Notifier Proxy  |    Node    |
|     :recycle:      |    SMS Sender    |    Node    |
|     :recycle:      |   Push Sender    |    Node    |
|     :recycle:      |   Email Sender   |    Node    |
|     :recycle:      |     Website      |    Node    |
|     :recycle:      |      Forum       |    Node    |
|     :recycle:      |     Content      |    Node    |
|     :recycle:      |      Editor      |    Node    |
|     :recycle:      | Game rich client |    Node    |
|     :recycle:      | Game thin client |    Node    |
|     :recycle:      |       Logs       |    Node    |
|     :recycle:      | User Management  |    Node    |
| :white_check_mark: |     Notifier     |    Node    |
|     :recycle:      |  Remote Config   |    Node    |
|     :recycle:      |   COMMS - SSS    |    Node    |
|     :recycle:      |   COMMS - ESS    |    Node    |
|     :recycle:      |   COMMS - NPS    |    Node    |
|     :recycle:      |   COMMS - PSS    |    Node    |


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