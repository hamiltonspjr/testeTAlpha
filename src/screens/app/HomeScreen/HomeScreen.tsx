import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {useProductList} from '../../../domain/Products/useCases/useProductList';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Product} from '../../../domain/Products/productTypes';
import {Box} from '../../../components/Box/Box';
import {useScrollToTop} from '@react-navigation/native';

export function HomeScreen() {
  const {productList} = useProductList();

  const flatListRef = React.useRef<FlatList<Product>>(null);
  useScrollToTop(flatListRef);

  function renderProduct({item}: ListRenderItemInfo<Product>) {
    return (
      <Box>
        <Text>{item.name}</Text>
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={productList}
        ref={flatListRef}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderProduct}
      />
    </Screen>
  );
}
