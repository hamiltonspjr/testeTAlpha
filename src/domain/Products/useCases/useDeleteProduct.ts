import {useMutation, useQueryClient} from '@tanstack/react-query';
import {MutationOptions, QueryKeys} from '../../../infra/infraTypes';
import {productService} from '../productService';

export function useDeleteProduct(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();

  const {mutate, isError, isPending} = useMutation<
    void,
    unknown,
    {idProduct: number}
  >({
    mutationFn: variables => productService.deleteProduct(variables.idProduct),
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
          options.errorMessage || 'Não foi possível excluir este produto',
        );
      }
    },
  });
  async function deleteProduct(idProduct: number) {
    mutate({idProduct});
  }
  return {
    deleteProduct,
    isError,
    isPending,
  };
}
