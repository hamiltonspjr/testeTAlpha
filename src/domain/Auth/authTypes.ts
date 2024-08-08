export interface AuthCredentials {
  token: string;
}

export interface AuthCredentialsAPI {
  success: boolean; // true
  message: string; //'Login realizado com sucesso';
  data: {
    token: string; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksImlhdCI6MTcyMzEyNTI0NX0.rJbU1gPYAsioBmG8IstxosTMHQ_VQhXluChS7-wygoE';
  };
}

export interface SignUpDataApi {
  name: string;
  taxNumber: string;
  mail: string;
  phone: string;
  password: string;
}

export interface SignUpData {
  name: string;
  taxNumber: string;
  mail: string;
  phone: string;
  password: string;
}
export interface SignUpDataApiReturn {
  success: boolean;
  message: string;
  data: null;
}
