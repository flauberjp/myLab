import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TomadorComponent } from '../tomador/tomador.component';
import { PrestadorComponent } from '../prestador/prestador.component';
import { ContadorComponent } from '../contador/contador.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthCallbackComponent } from '../auth-callback/auth-callback.component';


const routes: Routes = [
  { 
    path: 'tomador',      
    component: TomadorComponent
  },
  { 
    path: 'prestador', 
    component: PrestadorComponent,
    canActivate: [AuthGuardService]
  },  
  {
    path: 'contador',
    component: ContadorComponent,
    canActivate: [AuthGuardService]
  },
  { path: '',
    redirectTo: '/tomador',
    pathMatch: 'full'
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
