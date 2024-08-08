import {z} from 'zod';
import {cpfAndCnpjRegex} from '../../../utils/regexValidationSchema';

export const loginSchema = z.object({
  taxNumber: z.string().regex(cpfAndCnpjRegex, 'cpf ou cnpj inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
