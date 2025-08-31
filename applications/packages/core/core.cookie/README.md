## core.cookie

**Exports**
* `CookieProvider`

**Usage**
```ts

import { CookieProvider } from '@wraithlight/core.cookie';

class MyCookieProvider extends CookieProvider {}

const cookies = new MyCookieProvider('session');

// Set a cookie with expiration
cookies.setCookie('abc123', new Date(Date.now() + 24 * 60 * 60 * 1000));

// Get a cookie
const value = cookies.getCookie();
console.log(value); // "abc123"

// Check if the cookie exists
console.log(cookies.hasCookie()); // true

// Delete the cookie
cookies.deleteCookie();
console.log(cookies.hasCookie()); // false


```