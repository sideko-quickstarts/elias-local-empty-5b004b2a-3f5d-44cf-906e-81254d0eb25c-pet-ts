
### Delete purchase order by identifier. <a name="delete"></a>

For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.

**API Endpoint**: `DELETE /store/order/{orderId}`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `orderId` | ✓ | ID of the order that needs to be deleted | `123` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.store.order.delete({ orderId: 123 });

```

### Find purchase order by ID. <a name="get"></a>

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

**API Endpoint**: `GET /store/order/{orderId}`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `orderId` | ✓ | ID of order that needs to be fetched | `123` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.store.order.get({ orderId: 123 });

```

#### Response

##### Type
Union of[Order](/src/types/order.ts)

##### Example
`{"id": 10, "petId": 198772, "quantity": 7, "status": "approved"}`

### Place an order for a pet. <a name="create"></a>

Place a new order in the store.

**API Endpoint**: `POST /store/order`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `complete` | ✗ |  | `true` |
| `id` | ✗ |  | `10` |
| `petId` | ✗ |  | `198772` |
| `quantity` | ✗ |  | `7` |
| `shipDate` | ✗ |  | `"1970-01-01T00:00:00"` |
| `status` | ✗ | Order Status | `"approved"` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.store.order.create();

```

#### Response

##### Type
[Order](/src/types/order.ts)

##### Example
`{"id": 10, "petId": 198772, "quantity": 7, "status": "approved"}`
