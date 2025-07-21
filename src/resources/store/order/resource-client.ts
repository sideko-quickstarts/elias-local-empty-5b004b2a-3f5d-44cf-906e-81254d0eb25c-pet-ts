import { types } from "petstore_sample_api_ts";
import {
  ApiPromise,
  ApiResponse,
  BinaryResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  zodRequiredAny,
  zodUploadFile,
} from "petstore_sample_api_ts/core";
import * as requests from "petstore_sample_api_ts/resources/store/order/request-types";
import { Schemas$Order } from "petstore_sample_api_ts/types/order";
import * as z from "zod";

export class OrderClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete purchase order by identifier.
   *
   * For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.
   *
   * DELETE /store/order/{orderId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/store/order/${request.orderId}`,
      auth: ["api_key"],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Find purchase order by ID.
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * GET /store/order/{orderId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Order | BinaryResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/store/order/${request.orderId}`,
      auth: ["api_key"],
      responseSchema: z.union([Schemas$Order.in, zodUploadFile]),
      opts,
    });
  }
  /**
   * Place an order for a pet.
   *
   * Place a new order in the store.
   *
   * POST /store/order
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Order> {
    return this._client.makeRequest({
      method: "post",
      path: "/store/order",
      auth: ["api_key"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$Order.out.parse(request),
      bodyEncoding: {
        style: {
          complete: "form",
          id: "form",
          petId: "form",
          quantity: "form",
          shipDate: "form",
          status: "form",
        },
        explode: {
          complete: true,
          id: true,
          petId: true,
          quantity: true,
          shipDate: true,
          status: true,
        },
      },
      responseSchema: Schemas$Order.in,
      opts,
    });
  }
}
