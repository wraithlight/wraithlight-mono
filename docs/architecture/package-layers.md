## Package layers

The repository contains multiple package prefixes:
* `framework`
* `core`
* `common`
* `domain`
* `tool`
* `plugins`
* `ui`
* `kernel`

And a few package folders.
Basically a package can be application level or standalone package. To have an example, lets take a look at user management:

The UM application tree built up with the following packages:
* `core.user-management.types`
* `core.user-management.constants`
* `common.user-management.dal`

The thumb of rule is that the levels can depend on each other in the following way:
* `plugins`
* `kernel`
* `framework`
* `tool`
* `core`
* `domain`
* `ui`
* `common`

And application level `core` or `common` packages can depend on `core` packages from `packages/core` library.
