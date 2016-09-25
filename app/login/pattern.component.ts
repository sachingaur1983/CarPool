import { Component } from '@angular/core';

import { AppService } from '../service/app.service';

@Component({
    selector: 'pattern',
    templateUrl: 'app/login/pattern.component.html',
    styleUrls: [ './app/login/pattern.component.css' ]
})
export class PatternComponent {
    public pageTitle: string = 'Pattern';
    public pin: string = '';    
    public buttons = [1,2,3,4,5,6,7,8,9,0];
    private pinMaxLength : number = 4;    

    constructor(private _loginService: AppService)
    {

    }
// appends buttons value to text field
    public append(event: any): void {
        if (this.pin.length != this.pinMaxLength){
            this.pin += event.target.textContent;        
        }
    }

    public clear(): void {

        this.pin = '';
    }    
}
