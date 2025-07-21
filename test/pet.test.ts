import fs from "fs";
import Client, { Environment } from "petstore_sample_api_ts";

describe("tests client.pet.delete", () => {
  test.concurrent(
    "DELETE /pet/{petId} | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet.delete({ petId: 123 }).asResponse(),
        client.pet.delete({ petId: 123 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.pet.findByStatus", () => {
  test.concurrent(
    "GET /pet/findByStatus | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet.findByStatus().asResponse(),
        client.pet.findByStatus(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
  test.concurrent(
    "GET /pet/findByStatus | testId: success_required_only | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet.findByStatus().asResponse(),
        client.pet.findByStatus(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.pet.get", () => {
  test.concurrent(
    "GET /pet/{petId} | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet.get({ petId: 123 }).asResponse(),
        client.pet.get({ petId: 123 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.pet.create", () => {
  test.concurrent(
    "POST /pet | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet
          .create({
            category: { id: 1, name: "Dogs" },
            id: 10,
            name: "doggie",
            photoUrls: ["string"],
            status: "available",
            tags: [{ id: 123, name: "string" }],
          })
          .asResponse(),
        client.pet.create({
          category: { id: 1, name: "Dogs" },
          id: 10,
          name: "doggie",
          photoUrls: ["string"],
          status: "available",
          tags: [{ id: 123, name: "string" }],
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.pet.uploadImage", () => {
  test.concurrent(
    "POST /pet/{petId}/uploadImage | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet
          .uploadImage({
            data: fs.createReadStream("uploads/file.pdf"),
            petId: 123,
            additionalMetadata: "string",
          })
          .asResponse(),
        client.pet.uploadImage({
          data: fs.createReadStream("uploads/file.pdf"),
          petId: 123,
          additionalMetadata: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
  test.concurrent(
    "POST /pet/{petId}/uploadImage | testId: success_required_only | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet
          .uploadImage({
            data: fs.createReadStream("uploads/file.pdf"),
            petId: 123,
          })
          .asResponse(),
        client.pet.uploadImage({
          data: fs.createReadStream("uploads/file.pdf"),
          petId: 123,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.pet.update", () => {
  test.concurrent(
    "PUT /pet | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pet
          .update({
            category: { id: 1, name: "Dogs" },
            id: 10,
            name: "doggie",
            photoUrls: ["string"],
            status: "available",
            tags: [{ id: 123, name: "string" }],
          })
          .asResponse(),
        client.pet.update({
          category: { id: 1, name: "Dogs" },
          id: 10,
          name: "doggie",
          photoUrls: ["string"],
          status: "available",
          tags: [{ id: 123, name: "string" }],
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
