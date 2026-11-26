import { z } from "zod";

export const createProductSchema = z.object({
    sku: z.string().trim().min(1),
    name: z.string().trim().min(1),
    description: z.string().trim().nullable().optional(),
    sellingPrice: z.number().positive()
});

export type CreateProductInput = z.infer<typeof createProductSchema>;