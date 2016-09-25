import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { RegisterComponent } from './registration/register.component';
import { PatternComponent } from './login/pattern.component';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing
     ],
  declarations: [ AppComponent, RegisterComponent, PatternComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
