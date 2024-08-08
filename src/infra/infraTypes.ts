export interface MutationOptions<TDATA> {
  onSuccess?: (data: TDATA) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
