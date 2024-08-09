import React from 'react';
import {Product} from '../../domain/Products/productTypes';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {Pressable} from 'react-native';

interface Props {
  product: Product;
}

export function ProductItem({product}: Props) {
  return (
    <Pressable>
      <Box
        backgroundColor="gray4"
        marginBottom="s24"
        borderRadius="s8"
        padding="s10">
        <Text preset="paragraphLarge" color="primary" bold mb="s8">
          {product.name}
        </Text>
        <Text preset="paragraphSmall">{product.description}</Text>
        <Text preset="paragraphSmall">id: {product.id}</Text>
      </Box>
    </Pressable>
  );
}
