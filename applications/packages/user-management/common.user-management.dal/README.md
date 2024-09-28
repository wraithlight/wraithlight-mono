## @wraithlight/common.user-management.dal

This library is the Data Access Layer for User Management (previously auth) microservice.

**Exports:**
* `initializeDal()`
* `ApplicationService`
* `SessionService`
* `UserService`
* `UserApplicationService`
* `APPLICATION_ERROR_CODES`
* `SESSION_ERROR_CODES`
* `USER_ERROR_CODES`
* `USER_APPLICATION_ERROR_CODES`

**Usage:**

Before creating/initializing any of the services, you have to initialize the database connection and the dbcontext, by using `initializeDal()`.


```ts

import { initializeDal } from "@wraithlight/common.user-management.dal";

initializeDal(
  host: string,
  port: number,
  username: string,
  password: string,
  database: string,
  usePolling: boolean
);

```

Once the dbfactory is initialized, you can create an instance of any of the services and call the database through them.
