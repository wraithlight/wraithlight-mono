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
    "required": true,
    "example": 10,
    "schema": {
      "type": "number"
    },
    "in": "query"
  },
  {
    "name": "take",
    "required": true,
    "example": 10,
    "schema": {
      "type": "number"
    },
    "in": "query"
  },
  {
    "name": "order",
    "required": true,
    "example": "ASC",
    "schema": {
      "type": "string",
      "enum": ["ASC", "DESC"],
    },
    "in": "query"
  },
  {
    "name": "orderBy",
    "required": true,
    "example": "id",
    "schema": {
      "type": "string",
    },
    "in": "query"
  }
]

```

---

### Response format

When returning the items, the reponse should follow the `IServerSidePaginated<T>` interface.

```ts

interface IListResult<T> {
  items: ReadonlyArray<T>;
  visibleCount: number;
  allCount: number;
  skip: number;
  take: number;
}

```

* `items` - Contains the visible items.
* `visibleCount` - Count of visible items.
* `allCount` - Count of all items.
* `skip` - Number of items to skip before take the visible elements.
* `take` - Number of items to take.
