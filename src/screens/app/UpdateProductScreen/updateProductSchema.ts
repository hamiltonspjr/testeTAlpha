import {z} from 'zod';

export const updateProductSchema = z.object({
  name: z.string().min(2, 'Nome de produto muito curto'),
  description: z.string().min(5, 'Descrição muito curta'),
  price: z.string(),
  stock: z.string(),
});

export type UpdateProductSChemaType = z.infer<typeof updateProductSchema>;
