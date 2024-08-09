interface Data<TDATA> {
  products: TDATA[];
}
export interface Page<TData> {
  success: boolean;
  message: null | string;
  data: Data<TData>;
}
