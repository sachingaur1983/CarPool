import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './mockApi/in-memory-data-service';

import { AppComponent }  from './app.component';
import { RegisterComponent } from './registration/register.component';
import { PatternComponent } from './login/pattern.component';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }),
    routing
     ],
  declarations: [ AppComponent, RegisterComponent, PatternComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
