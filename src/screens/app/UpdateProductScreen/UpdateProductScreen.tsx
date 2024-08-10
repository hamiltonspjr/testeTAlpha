import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {AppScreenProps} from '../../../routes/navigationTypes';
import {useForm} from 'react-hook-form';
import {
  updateProductSchema,
  UpdateProductSChemaType,
} from './updateProductSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '../../../services/toast/useToast';
import {useProductUpdate} from '../../../domain/Products/useCases/useProductUpdate';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {Button} from '../../../components/Button/Button';

export function UpdateProductScreen({
  route,
  navigation,
}: AppScreenProps<'UpdateProductScreen'>) {
  const idProduct = route.params.product.id;
  const {control, formState, handleSubmit} = useForm<UpdateProductSChemaType>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: route.params.product.name,
      description: route.params.product.description,
      price: route.params.product.price.toString(),
      stock: route.params.product.stock.toString(),
    },
    mode: 'onChange',
  });
  const {showToast} = useToastService();
  const {isPending, updateProduct} = useProductUpdate({
    onError: message => showToast({message, type: 'error'}),
  });

  async function submitForm({
    name,
    description,
    price,
    stock,
  }: UpdateProductSChemaType) {
    const product = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    await updateProduct(idProduct, product);

    updateProductIsSuccess();
  }

  function updateProductIsSuccess() {
    showToast({message: 'Produto atualizado com sucesso', type: 'success'});
    navigation.navigate('AppTabNavigator', {
      screen: 'HomeScreen',
    });
  }

  return (
    <Screen scrollable canGoBack title="Atualizar produto">
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
        title="Atualizar produto"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isPending}
      />
    </Screen>
  );
}
