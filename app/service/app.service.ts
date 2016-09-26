import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { UserCredentials } from '../models/user-credentials';
import { UserRegisterInfo } from '../models/user-info';
import { ApiConstants } from '../constants/constants-api-urls';

@Injectable()
export class AppService {
    constructor(
        private _http: Http
    ){}

    isAuthenticated(credentials: UserCredentials): Promise<any>{
        return Promise.resolve(true);
    }    

    getUsers(): Promise<any>{
        return this._http.get(ApiConstants.registerUrl).toPromise()
                    .then(response => response.json().data)
                    .catch(this.handleError);
    }

    register(userInfo: UserRegisterInfo): Promise<any>{
        return this._http.post(ApiConstants.registerUrl, userInfo)
                    .toPromise()
                    .then(this.handleResponse)   
                    .catch(this.handleError);
    }

    handleResponse<T>(response: any): T {
        return response.json().data as T;
    }

    handleError(error: any): Promise<any>{
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }
}