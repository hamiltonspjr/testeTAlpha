import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationTypes';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {useDeleteProduct} from '../../../domain/Products/useCases/useDeleteProduct';
import {useToastService} from '../../../services/toast/useToast';
import {Alert} from 'react-native';

export function ProductScreen({
  route,
  navigation,
}: AppScreenProps<'ProductScreen'>) {
  function navigateToUpdateProductScreen() {
    navigation.navigate('UpdateProductScreen', {
      product: route.params.product,
    });
  }
  const {showToast} = useToastService();
  const {isPending, deleteProduct} = useDeleteProduct({
    onError: message => showToast({message, type: 'error'}),
  });

  function productDelete(productId: number) {
    Alert.alert('Deletar produto', 'Deseja realmente deletar esse produto?', [
      {
        text: 'Sim',
        onPress: () => {
          deleteProduct(productId);
          showToast({message: 'Produto excluido com sucesso', type: 'success'});
          navigation.navigate('AppTabNavigator', {
            screen: 'HomeScreen',
          });
        },
        style: 'default',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Screen canGoBack title="Página de Produto">
      <Box flexDirection="row" gap="s4">
        <Text preset="paragraphMedium" color="primary" bold>
          Nome:
        </Text>
        <Text>{route.params.product.name}</Text>
      </Box>
      <Box flexDirection="row" gap="s4">
        <Text preset="paragraphMedium" color="primary" bold>
          Descrição:
        </Text>
        <Text>{route.params.product.description}</Text>
      </Box>
      <Box flexDirection="row" gap="s4">
        <Text preset="paragraphMedium" color="primary" bold>
          Preço:
        </Text>
        <Text>R$ {route.params.product.price}</Text>
      </Box>
      <Box flexDirection="row" gap="s4">
        <Text preset="paragraphMedium" color="primary" bold>
          Quantidade em estoque:
        </Text>
        <Text>{route.params.product.stock}</Text>
      </Box>
      <Button
        title="Atualizar produto"
        mt="s32"
        onPress={navigateToUpdateProductScreen}
      />
      <Button
        preset="outline"
        title="Excluir"
        mt="s10"
        disabled={isPending}
        onPress={() => productDelete(route.params.product.id)}
      />
    </Screen>
  );
}
