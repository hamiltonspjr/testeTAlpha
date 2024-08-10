import {PageResponse} from '../../api/apiTypes';
import {Page, PageProduct} from '../../types/Pages';
import {productAdapter} from './productAdapter';
import {productApi} from './productApi';
import {Product, ProductCreateAndUpdate} from './productTypes';

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

async function create(product: ProductCreateAndUpdate): Promise<PageResponse> {
  const createResponse = await productApi.create(product);
  return {
    success: createResponse.success,
    message: createResponse.message,
    data: createResponse.data,
  };
}

async function update(
  idProduct: number,
  product: ProductCreateAndUpdate,
): Promise<void> {
  const response = await productApi.update(idProduct, product);
  return response;
}

export const productService = {
  getList,
  getProductById,
  create,
  update,
};
