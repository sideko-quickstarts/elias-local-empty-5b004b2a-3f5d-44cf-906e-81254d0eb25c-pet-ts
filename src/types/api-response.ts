import { ApiResponse, zodTransform } from "petstore_sample_api_ts/core";
import * as z from "zod";

/**
 * ApiResponse
 */
export type ApiResponse = {
  code?: number | undefined;
  message?: string | undefined;
  type?: string | undefined;
};

/**
 * @internal
 * ApiResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApiResponse = {
  code?: number | undefined;
  message?: string | undefined;
  type?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApiResponse
 */
const SchemaIn$ApiResponse: z.ZodType<
  ApiResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      message: "message",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApiResponse
 */
const SchemaOut$ApiResponse: z.ZodType<
  External$ApiResponse, // output type of this zod object
  z.ZodTypeDef,
  ApiResponse // the object to be transformed
> = z
  .object({
    code: z.number().int().optional(),
    message: z.string().optional(),
    type: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      message: "message",
      type: "type",
    });
  });

export const Schemas$ApiResponse = {
  in: SchemaIn$ApiResponse,
  out: SchemaOut$ApiResponse,
};
