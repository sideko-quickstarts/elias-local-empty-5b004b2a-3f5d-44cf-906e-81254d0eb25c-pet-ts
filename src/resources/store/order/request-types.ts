import { zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * ID of the order that needs to be deleted
   */
  orderId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  orderId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orderId: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orderId: "orderId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    orderId: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orderId: "orderId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * ID of order that needs to be fetched
   */
  orderId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  orderId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orderId: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orderId: "orderId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    orderId: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orderId: "orderId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  complete?: boolean | undefined;
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: string | undefined;
  /**
   * Order Status
   */
  status?: ("approved" | "delivered" | "placed") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  complete?: boolean | undefined;
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: string | undefined;
  status?: ("approved" | "delivered" | "placed") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    complete: z.boolean().optional(),
    id: z.number().int().optional(),
    petId: z.number().int().optional(),
    quantity: z.number().int().optional(),
    shipDate: z.string().optional(),
    status: z.enum(["approved", "delivered", "placed"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      complete: "complete",
      id: "id",
      petId: "petId",
      quantity: "quantity",
      shipDate: "shipDate",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    complete: z.boolean().optional(),
    id: z.number().int().optional(),
    petId: z.number().int().optional(),
    quantity: z.number().int().optional(),
    shipDate: z.string().optional(),
    status: z.enum(["approved", "delivered", "placed"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      complete: "complete",
      id: "id",
      petId: "petId",
      quantity: "quantity",
      shipDate: "shipDate",
      status: "status",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
