import {Product, ProductApi} from './productTypes';

function toProduct(productApi: ProductApi): Product {
  return {
    id: productApi.id,
    name: productApi.name,
    description: productApi.description,
    price: productApi.price,
    stock: productApi.stock,
  };
}

export const productAdapter = {toProduct};
