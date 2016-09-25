import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './service/app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [ AppService ]
})

export class AppComponent { 
    title: string = 'Carpool'
 }
