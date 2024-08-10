import {api} from '../../api/apiConfig';
import {PageAPI, PageProductAPI, PageResponse} from '../../api/apiTypes';
import {ProductApi, ProductCreateAndUpdate} from './productTypes';

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

async function create(product: ProductCreateAndUpdate): Promise<PageResponse> {
  const response = await api.post<PageResponse>(
    '/api/products/create-product',
    {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    },
  );
  console.log(response.data);
  return response.data;
}

export const productApi = {
  getList,
  getProductById,
  create,
};
