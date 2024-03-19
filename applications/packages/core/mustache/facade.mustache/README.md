## facade.mustache

### Exports
* `mustacheFacade<T>(template: string, model: T): MustacheRenderResult`

### Types
**MustacheRenderResult**

```ts

{
    /**
     * Represents if the operation succeeded.
     **/
    isSuccess: boolean;
    /**
     * The rendered template if the operation succeeded. Otherwise the original template.
     */
    renderedTemplate: string;
}

```


### Usage


`mustacheFacade<T>(template: string, model: T): MustacheRenderResult`
```ts

import { mustacheFacade } from "@wraithlight/facade.mustache";

const template = "<h1>{{name}}</h1>";
const model = { name: "wraithlight" };

const renderedTemplate = mustacheFacade(template, model);

```