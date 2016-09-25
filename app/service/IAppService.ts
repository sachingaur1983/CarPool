import { UserCredentials } from '../models/user-credentials';
import { UserRegisterInfo } from '../models/user-info';

export interface IAppService{
    isAuthenticated(credentials: UserCredentials): Promise<any>;

    register(userInfo: UserRegisterInfo): Promise<any>;
}