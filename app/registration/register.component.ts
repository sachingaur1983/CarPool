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
        this._appService.register(this.userInfo).then(result => {
            console.log(`service: ${result}`);
        })
        this.router.navigate(['/pattern']);
    }

    get diagnostic() { return JSON.stringify(this.userInfo); }
}
