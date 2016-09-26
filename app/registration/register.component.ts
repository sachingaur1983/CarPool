import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../service/app.service';
import { UserRegisterInfo } from '../models/user-info';

@Component({
    selector: 'register',
    templateUrl: 'app/registration/register.component.html',
    styleUrls: [ './app/registration/register.component.css' ]
})
export class RegisterComponent {
    pageTitle: string = 'Register';    
    
    userInfo = new UserRegisterInfo();
    isValid: boolean = false;
    constructor(
        private _appService: AppService,
        private router : Router  
        ){ }

    onRegister(): void {
        console.log(JSON.stringify(this.userInfo));
        this._appService.register(this.userInfo).then(this.handleResult);
        this._appService.getUsers().then(this.handleResult);
        this.router.navigate(['/pattern']);
    }

    handleResult(result: any): void
    {
        console.log(`service output \n${JSON.stringify(result)}`);
    }

    get diagnostic() { return JSON.stringify(this.userInfo); }
}
