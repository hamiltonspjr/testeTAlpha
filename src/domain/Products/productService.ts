import {Page, PageProduct} from '../../types/Pages';
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

async function getProductById(
  productId: number,
): Promise<PageProduct<Product>> {
  const productData = await productApi.getProductById(productId);
  return {
    success: productData.success,
    message: productData.message,
    data: {
      product: productData.data.product,
    },
  };
}

export const productService = {
  getList,
  getProductById,
};
