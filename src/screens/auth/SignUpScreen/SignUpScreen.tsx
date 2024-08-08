import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationTypes';
import {useForm} from 'react-hook-form';
import {signUpSchema, SignUpSchemaType} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      taxNumber: '',
      mail: '',
      phone: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchemaType) {
    // TODO: implementar
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="name"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="taxNumber"
        label="CPF ou CNPJ"
        placeholder="Digite seu cpf ou cpnj"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="mail"
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="phone"
        label="Telefone"
        placeholder="Digite seu telefone"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
