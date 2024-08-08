import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationTypes';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu login e senha para entrar
      </Text>
      <TextInput
        label="Login"
        placeholder="CPF ou CNPJ"
        boxProps={{mb: 's10'}}
      />
      <PasswordInput label="Senha" placeholder="Digite sua senha" />

      <Button mt="s48" title="Entrar" />
      <Button
        onPress={navigateToSignUpScreen}
        mt="s12"
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
