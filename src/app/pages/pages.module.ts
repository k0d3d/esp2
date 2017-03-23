import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module'

import { ActivityComponent } from '../activity/activity.component';
import { ActivityService } from '../activity/activity.service'


@NgModule({
  imports: [ 
    SharedModule,
    PagesRoutingModule
    ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    ActivityComponent,
  ],
  providers: [ ActivityService ]
})
export class PagesModule { }
