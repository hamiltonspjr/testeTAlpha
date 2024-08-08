import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.data.token,
  };
}

export const authAdapter = {toAuthCredentials};
