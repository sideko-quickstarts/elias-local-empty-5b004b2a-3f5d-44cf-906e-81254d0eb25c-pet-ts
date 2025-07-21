import { zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * Order
 */
export type Order = {
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
 * Order without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Order = {
  complete?: boolean | undefined;
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: string | undefined;
  status?: ("approved" | "delivered" | "placed") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Order
 */
const SchemaIn$Order: z.ZodType<
  Order, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Order
 */
const SchemaOut$Order: z.ZodType<
  External$Order, // output type of this zod object
  z.ZodTypeDef,
  Order // the object to be transformed
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

export const Schemas$Order = {
  in: SchemaIn$Order,
  out: SchemaOut$Order,
};
