import {Page} from '../../types/Pages';
import {productAdapter} from './productAdapter';
import {productApi} from './productApi';
import {Product} from './productTypes';

async function getList(): Promise<Page<Product>> {
  const productDataApi = await productApi.getList();
  return {
    success: productDataApi.success,
    message: productDataApi.message,
    data: {
      products: productDataApi.data.products.map(productAdapter.toProduct),
    },
  };
}

export const productService = {
  getList,
};
