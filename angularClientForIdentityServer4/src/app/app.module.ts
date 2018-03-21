import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PrestadorComponent } from './prestador/prestador.component';
import { TomadorComponent } from './tomador/tomador.component';
import { ContadorComponent } from './contador/contador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PrestadorComponent,
    TomadorComponent,
    ContadorComponent,
    PageNotFoundComponent,
    AuthCallbackComponent,
    CallApiComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
