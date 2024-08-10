import {useMutation, useQueryClient} from '@tanstack/react-query';
import {MutationOptions, QueryKeys} from '../../../infra/infraTypes';
import {ProductCreateAndUpdate} from '../productTypes';
import {productService} from '../productService';

export function useProductUpdate(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();

  const {mutate, isError, isPending} = useMutation<
    void,
    unknown,
    {idProduct: number; product: ProductCreateAndUpdate}
  >({
    mutationFn: variables =>
      productService.update(variables.idProduct, variables.product),
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
          options.errorMessage || 'Não foi possível atualizar esse produto',
        );
      }
    },
  });
  async function updateProduct(
    idProduct: number,
    product: ProductCreateAndUpdate,
  ) {
    mutate({idProduct, product});
  }
  return {
    updateProduct,
    isError,
    isPending,
  };
}
