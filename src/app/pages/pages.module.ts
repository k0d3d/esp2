import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [ 
    SharedModule,
    PagesRoutingModule
    ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
  ],
  providers: [ ]
})
export class PagesModule { }
