import {api} from '../../api/apiConfig';
import {PageAPI} from '../../api/apiTypes';
import {ProductApi} from './productTypes';

async function getList(): Promise<PageAPI<ProductApi>> {
  const response = await api.get<PageAPI<ProductApi>>(
    '/api/products/get-all-products',
  );
  return response.data;
}

export const productApi = {
  getList,
};
