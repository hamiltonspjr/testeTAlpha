interface DataApi<TDATA> {
  products: TDATA[];
}
export interface PageAPI<TData> {
  success: boolean;
  message: null | string;
  data: DataApi<TData>;
}
