import { Component } from 'angular2/core';

@Component({
    selector: 'pattern',
    templateUrl: 'app/login/pattern.component.html',
    styleUrls: [ './app/login/pattern.component.css' ]
})
export class PatternComponent {
    public pageTitle: string = 'Pattern';
    public pin: string = '';
    private pinMaxLength : number = 4;    

    public append(value: string): void {
        if (this.pin.length != this.pinMaxLength){
            this.pin += value;        
        }
    }

    public clear(): void {

        this.pin = '';
    }    
}
