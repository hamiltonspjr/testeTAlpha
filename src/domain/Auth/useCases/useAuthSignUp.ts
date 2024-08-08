import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {SignUpData, SignUpDataApiReturn} from '../authTypes';
import {authService} from '../authService';

export function useAuthSignUp(
  options?: MutationOptions<SignUpDataApiReturn | void>,
) {
  const mutation = useMutation<SignUpDataApiReturn | void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });
  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }
  return {
    isLoading: mutation.isPending,
    signUp,
  };
}
