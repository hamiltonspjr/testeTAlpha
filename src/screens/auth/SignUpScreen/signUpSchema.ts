import {z} from 'zod';
import {
  cpfAndCnpjRegex,
  phoneRegex,
} from '../../../utils/regexValidationSchema';

export const signUpSchema = z.object({
  name: z.string().min(2, 'nome muito curto').max(50, 'nome muito longo'),
  taxNumber: z.string().regex(cpfAndCnpjRegex, 'cpf ou cnpj inválido'),
  mail: z.string().email('email inválido'),
  phone: z.string().regex(phoneRegex, 'contato inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
