import { zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * Category
 */
export type Category = {
  id?: number | undefined;
  name?: string | undefined;
};

/**
 * @internal
 * Category without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Category = {
  id?: number | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Category
 */
const SchemaIn$Category: z.ZodType<
  Category, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number().int().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Category
 */
const SchemaOut$Category: z.ZodType<
  External$Category, // output type of this zod object
  z.ZodTypeDef,
  Category // the object to be transformed
> = z
  .object({
    id: z.number().int().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      name: "name",
    });
  });

export const Schemas$Category = {
  in: SchemaIn$Category,
  out: SchemaOut$Category,
};
