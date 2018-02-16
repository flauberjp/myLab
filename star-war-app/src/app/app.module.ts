import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PeopleService 
  //providers: [ {provider:'IPeopleService', useClass: PeopleService} ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
