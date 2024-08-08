import {ToastService} from './toastType';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  const toast = useToastZustand();
  return toast;
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const {showToast, hideToast} = useToastServiceZustand();
  return {
    showToast,
    hideToast,
  };
}
