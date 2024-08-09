interface DataApi<TDATA> {
  products: TDATA[];
}
export interface PageAPI<TData> {
  success: boolean;
  message: null | string;
  data: DataApi<TData>;
}

interface DataProductAPI<TDATA> {
  product: TDATA;
}
export interface PageProductAPI<TDATA> {
  success: boolean;
  message: null | string;
  data: DataProductAPI<TDATA>;
}
