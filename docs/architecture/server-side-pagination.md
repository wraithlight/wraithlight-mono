## Server-side pagination

Server side pagination framework has two components.
* request format
* response format

### Request format

Each request should contain the following query parameters:
* `skip` (`number`) - represents how many items should be skipped during the pagination
* `take` (`number`) - represents how many items should be returned during the pagination (maximum).
* `order` (`ASC|DESC`) - represents if any ordering should be applied during the pagination.
* `orderBy` (`string`) - the property name on the model.

```ts

public async listUsers(
  @FromQuery("skip") skip: number,
  @FromQuery("take") take: number,
  @FromQuery("order") order: "ASC"|"DESC" = "ASC",
  @FromQuery("orderBy") orderBy: keyof UserDto = "id"
): Promise<UserListResponse> {}

```

```json

"parameters": [
  {
    "name": "skip",
    "type": "number",
    "description": "How many items should be skipped.",
    "example": 10,
    "in": "query"
  },
    {
    "name": "take",
    "type": "number",
    "description": "How many items should be taken.",
    "example": 10,
    "in": "query"
  },
    {
    "name": "order",
    "type": "string",
    "enum": ["ASC", "DESC"],
    "description": "Order direction.",
    "example": "ASC",
    "in": "query"
  },
    {
    "name": "orderBy",
    "type": "string",
    "description": "Order by property",
    "example": "id",
    "in": "query"
  }
]

```

---

### Response format

When returning the items, the reponse should follow the `IServerSidePaginated<T>` interface.

```ts

// TODO: core.server-side-pagination.types
interface IServerSidePaginated<T> {
  items: ReadonlyArray<T>;
  count: number;
  taken: number;
}

```

* `items` - Contains the visible items.
* `count` - Count of all items.
* `taken` - Count of visible items.
