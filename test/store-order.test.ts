import Client, { Environment } from "petstore_sample_api_ts";

describe("tests client.store.order.delete", () => {
  test.concurrent(
    "DELETE /store/order/{orderId} | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.store.order.delete({ orderId: 123 }).asResponse(),
        client.store.order.delete({ orderId: 123 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.store.order.get", () => {
  test.concurrent(
    "GET /store/order/{orderId} | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.store.order.get({ orderId: 123 }).asResponse(),
        client.store.order.get({ orderId: 123 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.store.order.create", () => {
  test.concurrent(
    "POST /store/order | testId: success_all_params | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_KEY",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.store.order.create().asResponse(),
        client.store.order.create(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
