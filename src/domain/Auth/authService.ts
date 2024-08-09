import {api} from '../../api/apiConfig';
import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData, SignUpDataApiReturn} from './authTypes';

async function signIn(
  taxNumber: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(taxNumber, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('login ou senha inválido');
  }
}

async function signUp(
  signUpData: SignUpData,
): Promise<SignUpDataApiReturn | void> {
  try {
    await authApi.signUp(signUpData);
  } catch (error) {
    throw new Error('Usuário já cadastrado');
  }
}

function updateToken(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export const authService = {
  signIn,
  signUp,
  updateToken,
};
