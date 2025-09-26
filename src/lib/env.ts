

import { dlv } from "./dlv.js";

import * as z from "zod";

export interface Env {
  FASTPIX_USERNAME?: string | undefined;
  FASTPIX_PASSWORD?: string | undefined;

  FASTPIX_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z.object({
  FASTPIX_USERNAME: z.string().optional(),
  FASTPIX_PASSWORD: z.string().optional(),

  FASTPIX_DEBUG: z.coerce.boolean().optional(),
});

let envMemo: Env | undefined = undefined;
/**
 * Reads and validates environment variables.
 */
export function env(): Env {
  if (envMemo) {
    return envMemo;
  }

  envMemo = envSchema.parse(
    dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {},
  );
  return envMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
  envMemo = undefined;
}
