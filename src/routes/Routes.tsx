import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack} from './AuthStack';
import {useAuthCredentials} from '../services/authCredentials/useAuthCredentials';
import {AppStack} from './AppStack';

export function Router() {
  const {authCredentials} = useAuthCredentials();
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
