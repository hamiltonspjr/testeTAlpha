interface Data<TDATA> {
  products: TDATA[];
}
export interface Page<TData> {
  success: boolean;
  message: null | string;
  data: Data<TData>;
}

interface DataProduct<Tdata> {
  product: Tdata;
}
export interface PageProduct<TDATA> {
  success: boolean;
  message: null | string;
  data: DataProduct<TDATA>;
}
