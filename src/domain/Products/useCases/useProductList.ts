import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {productService} from '../productService';
import {Product} from '../productTypes';

export interface useProductListResult<TDATA> {
  productList: TDATA[] | undefined;
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
}

export function useProductList(): useProductListResult<Product> {
  const query = useQuery({
    queryKey: [QueryKeys.ProductList],
    queryFn: () => productService.getList(),
  });

  return {
    productList: query.data?.data.products,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
  };
}
