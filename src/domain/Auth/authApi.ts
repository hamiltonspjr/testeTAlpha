import {api} from '../../api/apiConfig';
import {
  AuthCredentialsAPI,
  SignUpDataApi,
  SignUpDataApiReturn,
} from './authTypes';

async function signIn(
  taxNumber: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('/api/auth/login', {
    taxNumber,
    password,
  });
  return response.data;
}

async function signUp(data: SignUpDataApi): Promise<SignUpDataApiReturn> {
  const response = await api.post<SignUpDataApiReturn>(
    '/api/auth/register',
    data,
  );
  return response.data;
}

export const authApi = {
  signIn,
  signUp,
};
