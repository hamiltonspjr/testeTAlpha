import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationTypes';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';

export function ProductScreen({route}: AppScreenProps<'ProductScreen'>) {
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
      <Button title="Atualizar produto" mt="s32" />
      <Button preset="outline" title="Excluir" mt="s10" />
    </Screen>
  );
}
