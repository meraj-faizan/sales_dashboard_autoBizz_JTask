import { z } from "zod";

export const SalesSchema = z.object({});

export type SalesSchemaType = z.infer<typeof SalesSchema>;
