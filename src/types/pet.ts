import { Category, External$Category, Schemas$Category } from "./category";
import { External$Tag, Schemas$Tag, Tag } from "./tag";
import { zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * Pet
 */
export type Pet = {
  category?: Category | undefined;
  id?: number | undefined;
  name: string;
  photoUrls: string[];
  /**
   * pet status in the store
   */
  status?: ("available" | "pending" | "sold") | undefined;
  tags?: Tag[] | undefined;
};

/**
 * @internal
 * Pet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Pet = {
  category?: External$Category | undefined;
  id?: number | undefined;
  name: string;
  photoUrls: string[];
  status?: ("available" | "pending" | "sold") | undefined;
  tags?: External$Tag[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Pet
 */
const SchemaIn$Pet: z.ZodType<
  Pet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    category: Schemas$Category.in.optional(),
    id: z.number().int().optional(),
    name: z.string(),
    photoUrls: z.array(z.string()),
    status: z.enum(["available", "pending", "sold"]).optional(),
    tags: z.array(Schemas$Tag.in).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      category: "category",
      id: "id",
      name: "name",
      photoUrls: "photoUrls",
      status: "status",
      tags: "tags",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Pet
 */
const SchemaOut$Pet: z.ZodType<
  External$Pet, // output type of this zod object
  z.ZodTypeDef,
  Pet // the object to be transformed
> = z
  .object({
    category: Schemas$Category.out.optional(),
    id: z.number().int().optional(),
    name: z.string(),
    photoUrls: z.array(z.string()),
    status: z.enum(["available", "pending", "sold"]).optional(),
    tags: z.array(Schemas$Tag.out).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      category: "category",
      id: "id",
      name: "name",
      photoUrls: "photoUrls",
      status: "status",
      tags: "tags",
    });
  });

export const Schemas$Pet = {
  in: SchemaIn$Pet,
  out: SchemaOut$Pet,
};
