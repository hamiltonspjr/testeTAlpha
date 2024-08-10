import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {AppTabScreenProps} from '../../../routes/navigationTypes';
import {useForm} from 'react-hook-form';
import {
  createProductSchema,
  CreateProductSchemaType,
} from './createProductSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '../../../services/toast/useToast';
import {useProductCreate} from '../../../domain/Products/useCases/useProductCreate';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {Button} from '../../../components/Button/Button';

export function CreateProductScreen({
  navigation,
}: AppTabScreenProps<'CreateProduct'>) {
  const {control, formState, handleSubmit, reset} =
    useForm<CreateProductSchemaType>({
      resolver: zodResolver(createProductSchema),
      defaultValues: {
        name: '',
        description: '',
        price: '',
        stock: '',
      },
      mode: 'onChange',
    });

  const {showToast} = useToastService();
  const {isPending, createProduct} = useProductCreate({
    onError: message => showToast({message, type: 'error'}),
  });

  function submitForm({
    name,
    description,
    price,
    stock,
  }: CreateProductSchemaType) {
    const product = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    createProduct(product);
    createProductIsSuccess();
  }

  function createProductIsSuccess() {
    showToast({message: 'Produto cadastrado com sucesso', type: 'success'});
    reset();
    navigation.navigate('HomeScreen');
  }

  return (
    <Screen scrollable title="Criar produto">
      <FormTextInput
        control={control}
        name="name"
        label="Nome"
        placeholder="Digite o nome do produto"
        boxProps={{mb: 's10'}}
      />
      <FormTextInput
        control={control}
        name="description"
        label="Descrição"
        placeholder="Digite a descrição do produto"
        boxProps={{mb: 's10'}}
      />
      <FormTextInput
        control={control}
        name="price"
        label="Preço"
        placeholder="Digite o preço do produto"
        boxProps={{mb: 's10'}}
        keyboardType="numeric"
      />
      <FormTextInput
        control={control}
        name="stock"
        label="Quantidade em estoque"
        placeholder="Digite a quantidade em estoque do produto"
        keyboardType="numeric"
      />
      <Button
        mt="s48"
        title="Adicionar produto"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isPending}
      />
    </Screen>
  );
}
