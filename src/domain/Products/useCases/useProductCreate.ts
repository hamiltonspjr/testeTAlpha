import {useMutation, useQueryClient} from '@tanstack/react-query';
import {MutationOptions, QueryKeys} from '../../../infra/infraTypes';
import {ProductCreateAndUpdate} from '../productTypes';
import {productService} from '../productService';
import {PageResponse} from '../../../api/apiTypes';

export function useProductCreate(options?: MutationOptions<PageResponse>) {
  const queryClient = useQueryClient();

  const {mutate, isError, isPending} = useMutation<
    PageResponse,
    unknown,
    {product: ProductCreateAndUpdate}
  >({
    mutationFn: variables => productService.create(variables.product),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ProductList],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options.errorMessage || 'Não foi possível cadastrar esse produto',
        );
      }
    },
  });

  async function createProduct(product: ProductCreateAndUpdate) {
    mutate({product});
  }
  return {
    createProduct,
    isError,
    isPending,
  };
}
