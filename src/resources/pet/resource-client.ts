import { types } from "petstore_sample_api_ts";
import {
  ApiPromise,
  ApiResponse,
  BinaryResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
  zodRequiredAny,
  zodUploadFile,
} from "petstore_sample_api_ts/core";
import * as requests from "petstore_sample_api_ts/resources/pet/request-types";
import { Schemas$ApiResponse } from "petstore_sample_api_ts/types/api-response";
import { Schemas$Pet } from "petstore_sample_api_ts/types/pet";
import * as z from "zod";

export class PetClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Deletes a pet.
   *
   * Delete a pet.
   *
   * DELETE /pet/{petId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/pet/${request.petId}`,
      auth: ["api_key"],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings.
   *
   * GET /pet/findByStatus
   */
  findByStatus(
    request: requests.FindByStatusRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Pet[] | BinaryResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/pet/findByStatus",
      auth: ["api_key"],
      query: [
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["available", "pending", "sold"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.union([z.array(Schemas$Pet.in), zodUploadFile]),
      opts,
    });
  }
  /**
   * Find pet by ID.
   *
   * Returns a single pet.
   *
   * GET /pet/{petId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Pet | BinaryResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/pet/${request.petId}`,
      auth: ["api_key"],
      responseSchema: z.union([Schemas$Pet.in, zodUploadFile]),
      opts,
    });
  }
  /**
   * Add a new pet to the store.
   *
   * Add a new pet to the store.
   *
   * POST /pet
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Pet | BinaryResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/pet",
      auth: ["api_key"],
      contentType: "application/json",
      body: Schemas$Pet.out.parse(request),
      responseSchema: z.union([Schemas$Pet.in, zodUploadFile]),
      opts,
    });
  }
  /**
   * Uploads an image.
   *
   * Upload image of the pet.
   *
   * POST /pet/{petId}/uploadImage
   */
  uploadImage(
    request: requests.UploadImageRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApiResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/pet/${request.petId}/uploadImage`,
      auth: ["api_key"],
      query: [
        encodeQueryParam({
          name: "additionalMetadata",
          value: z.string().optional().parse(request.additionalMetadata),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/octet-stream",
      body: zodUploadFile.parse(request.data),
      responseSchema: Schemas$ApiResponse.in,
      opts,
    });
  }
  /**
   * Update an existing pet.
   *
   * Update an existing pet by Id.
   *
   * PUT /pet
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Pet | BinaryResponse> {
    return this._client.makeRequest({
      method: "put",
      path: "/pet",
      auth: ["api_key"],
      contentType: "application/json",
      body: Schemas$Pet.out.parse(request),
      responseSchema: z.union([Schemas$Pet.in, zodUploadFile]),
      opts,
    });
  }
}
