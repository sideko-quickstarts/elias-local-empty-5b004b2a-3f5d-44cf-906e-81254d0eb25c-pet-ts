import { zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * Tag
 */
export type Tag = {
  id?: number | undefined;
  name?: string | undefined;
};

/**
 * @internal
 * Tag without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Tag = {
  id?: number | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Tag
 */
const SchemaIn$Tag: z.ZodType<
  Tag, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Tag
 */
const SchemaOut$Tag: z.ZodType<
  External$Tag, // output type of this zod object
  z.ZodTypeDef,
  Tag // the object to be transformed
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

export const Schemas$Tag = {
  in: SchemaIn$Tag,
  out: SchemaOut$Tag,
};
