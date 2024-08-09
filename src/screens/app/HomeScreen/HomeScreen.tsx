import React, {useEffect, useState} from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {useProductList} from '../../../domain/Products/useCases/useProductList';
import {
  FlatList,
  Keyboard,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import {Product, ProductApi} from '../../../domain/Products/productTypes';
import {useScrollToTop} from '@react-navigation/native';
import {ProductItem} from '../../../components/ProductItem/ProductItem';
import {HomeEmpty} from './components/HomeEmpty';
import {Text} from '../../../components/Text/Text';
import {TextMessage} from '../../../components/TextMessage/TextMessage';
import {Box} from '../../../components/Box/Box';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {productService} from '../../../domain/Products/productService';
import {api} from '../../../api/apiConfig';
import {PageAPI} from '../../../api/apiTypes';
import {productAdapter} from '../../../domain/Products/productAdapter';

export function HomeScreen() {
  const [filterValue, setFilterValue] = useState('');
  const [productFiltred, setProductFiltred] = useState<Product[] | undefined>(
    undefined,
  );
  const {productList, isError, isLoading, refresh} = useProductList();

  const flatListRef = React.useRef<FlatList<Product>>(null);
  useScrollToTop(flatListRef);

  function renderProduct({item}: ListRenderItemInfo<Product>) {
    return <ProductItem product={item} />;
  }

  async function filterProductById(value: string) {
    const response = await api.get(
      `/api/products/get-one-product/${Number(value)}`,
    );
    setProductFiltred(response.data);
    console.log(productFiltred?.map(productAdapter.toProduct));
  }

  return (
    <Screen flex={1}>
      <Text preset="headingLarge" color="primary" mb="s20">
        Home
      </Text>
      <TextMessage
        value={filterValue}
        placeholder="Pesquise um produto pelo id"
        onChangeText={setFilterValue}
        onPressSend={filterProductById}
      />
      <Box flex={1} mt="s32">
        <Text preset="headingSmall" mb="s10" color="primary">
          Produtos
        </Text>
        <FlatList
          data={!productFiltred ? productList : productFiltred}
          ref={flatListRef}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderProduct}
          onEndReachedThreshold={0.1}
          refreshing={isLoading}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refresh} />
          }
          contentContainerStyle={{
            flex: productList?.length === 0 ? 1 : undefined,
          }}
          ListEmptyComponent={
            <HomeEmpty refetch={refresh} error={isError} loading={isLoading} />
          }
        />
      </Box>
    </Screen>
  );
}
