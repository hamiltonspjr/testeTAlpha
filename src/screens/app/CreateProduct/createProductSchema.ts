import {z} from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(2, 'Nome de produto muito curto'),
  description: z.string().min(5, 'Descrição muito curta'),
  price: z.string(),
  stock: z.string(),
});

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
