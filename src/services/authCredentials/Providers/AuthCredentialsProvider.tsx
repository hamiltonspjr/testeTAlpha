import React, {createContext, useState} from 'react';
import {AuthCredentialsService} from '../authCredentialsType';
import {AuthCredentials} from '../../../domain/Auth/authTypes';
import {authService} from '../../../domain/Auth/authService';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  saveCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    setAuthCredentials(ac);
  }

  return (
    <AuthCredentialsContext.Provider value={{authCredentials, saveCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
