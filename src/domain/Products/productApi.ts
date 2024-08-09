import {api} from '../../api/apiConfig';
import {PageAPI, PageProductAPI} from '../../api/apiTypes';
import {ProductApi} from './productTypes';

async function getList(): Promise<PageAPI<ProductApi>> {
  const response = await api.get<PageAPI<ProductApi>>(
    '/api/products/get-all-products',
  );
  return response.data;
}

async function getProductById(
  productId: number,
): Promise<PageProductAPI<ProductApi>> {
  const response = await api.get(`/api/products/get-one-product/${productId}`);
  return response.data;
}

export const productApi = {
  getList,
  getProductById,
};
