import { Injectable } from '@angular/core';

import { UserCredentials } from '../models/user-credentials';
import { UserRegisterInfo } from '../models/user-info';
import { IAppService } from './IAppService';

@Injectable()
export class AppService implements IAppService {

    isAuthenticated(credentials: UserCredentials): Promise<any>{
        return Promise.resolve(true);
    }

    register(userInfo: UserRegisterInfo): Promise<any>{
        return Promise.resolve(true);
    }
}