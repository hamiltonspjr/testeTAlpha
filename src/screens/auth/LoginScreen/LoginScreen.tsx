import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationTypes';
import {useForm} from 'react-hook-form';
import {loginSchema, LoginSchemaType} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {useAuthSignIn} from '../../../domain/Auth/useCases/useAuthSignIn';
import {useToastService} from '../../../services/toast/useToast';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      taxNumber: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {showToast} = useToastService();
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });

  function submitForm({taxNumber, password}: LoginSchemaType) {
    signIn({taxNumber, password});
  }

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
      <FormTextInput
        control={control}
        name="taxNumber"
        label="Login"
        placeholder="Digite seu CPF ou CNPJ"
        boxProps={{mb: 's10'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button
        loading={isLoading}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        onPress={navigateToSignUpScreen}
        mt="s12"
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
