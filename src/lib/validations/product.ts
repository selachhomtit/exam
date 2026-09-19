import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.string().min(1, "Please select a category"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  stock: z.coerce.number().int().min(0, "Stock can't be negative"),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  description: z.string().max(500).optional().or(z.literal("")),
});

export type ProductFormValues = z.infer<typeof productSchema>;
