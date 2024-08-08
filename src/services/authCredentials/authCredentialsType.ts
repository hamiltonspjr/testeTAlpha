import {AuthCredentials} from '../../domain/Auth/authTypes';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
}
