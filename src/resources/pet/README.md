
### Deletes a pet. <a name="delete"></a>

Delete a pet.

**API Endpoint**: `DELETE /pet/{petId}`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `petId` | ✓ | Pet id to delete | `123` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.delete({ petId: 123 });

```

### Finds Pets by status. <a name="find_by_status"></a>

Multiple status values can be provided with comma separated strings.

**API Endpoint**: `GET /pet/findByStatus`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `status` | ✗ | Status values that need to be considered for filter | `"available"` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.findByStatus();

```

#### Response

##### Type
Array of [Pet](/src/types/pet.ts)

##### Example
`[{"id": 10, "name": "doggie", "photoUrls": ["string"]}]`

### Find pet by ID. <a name="get"></a>

Returns a single pet.

**API Endpoint**: `GET /pet/{petId}`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `petId` | ✓ | ID of pet to return | `123` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.get({ petId: 123 });

```

#### Response

##### Type
Union of[Pet](/src/types/pet.ts)

##### Example
`{"id": 10, "name": "doggie", "photoUrls": ["string"]}`

### Add a new pet to the store. <a name="create"></a>

Add a new pet to the store.

**API Endpoint**: `POST /pet`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `name` | ✓ |  | `"doggie"` |
| `photoUrls` | ✓ |  | `["string"]` |
| `category` | ✗ |  | `{"id": 1, "name": "Dogs"}` |
| `id` | ✗ |  | `10` |
| `status` | ✗ | pet status in the store | `"available"` |
| `tags` | ✗ |  | `[{}]` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.create({
  id: 10,
  name: "doggie",
  photoUrls: ["string"],
});

```

#### Response

##### Type
Union of[Pet](/src/types/pet.ts)

##### Example
`{"id": 10, "name": "doggie", "photoUrls": ["string"]}`

### Uploads an image. <a name="upload_image"></a>

Upload image of the pet.

**API Endpoint**: `POST /pet/{petId}/uploadImage`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `data` | ✓ |  | `fs.createReadStream("uploads/file.pdf")` |
| `petId` | ✓ | ID of pet to update | `123` |
| `additionalMetadata` | ✗ | Additional Metadata | `"string"` |

#### Example Snippet

```typescript
import fs from "fs";
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.uploadImage({
  data: fs.createReadStream("uploads/file.pdf"),
  petId: 123,
});

```

#### Response

##### Type
[ApiResponse](/src/types/api-response.ts)

##### Example
`{}`

### Update an existing pet. <a name="update"></a>

Update an existing pet by Id.

**API Endpoint**: `PUT /pet`

#### Parameters

| Parameter | Required | Description | Example |
|-----------|:--------:|-------------|--------|
| `name` | ✓ |  | `"doggie"` |
| `photoUrls` | ✓ |  | `["string"]` |
| `category` | ✗ |  | `{"id": 1, "name": "Dogs"}` |
| `id` | ✗ |  | `10` |
| `status` | ✗ | pet status in the store | `"available"` |
| `tags` | ✗ |  | `[{}]` |

#### Example Snippet

```typescript
import Client from "petstore_sample_api_ts";

const client = new Client({ apiKey: process.env["API_KEY"]!! });
const res = await client.pet.update({
  id: 10,
  name: "doggie",
  photoUrls: ["string"],
});

```

#### Response

##### Type
Union of[Pet](/src/types/pet.ts)

##### Example
`{"id": 10, "name": "doggie", "photoUrls": ["string"]}`
