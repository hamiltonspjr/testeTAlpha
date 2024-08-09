import {useMutation} from '@tanstack/react-query';
import {AuthCredentials} from '../authTypes';
import {authService} from '../authService';
import {MutationOptions} from '../../../infra/infraTypes';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';

interface Variables {
  taxNumber: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({taxNumber, password}) =>
      authService.signIn(taxNumber, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}
