## Environment variables used
* [wlType](#wltype)

### `wlType`
This environment variable is used to determine which environment the platform is running in.

Possbile values:
* `LOCAL`
* `DEV`
* `TEST`
* `STAGING`
* `PRODUCTION`

This environment variable is used within all the applications. It is being read by `getEnvironmentType()` in `core.env` package.