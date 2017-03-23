import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module'

import { ActivityComponent } from '../activity/activity.component';
import { ActivityService } from '../activity/activity.service'

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [ 
    DashboardComponent,
    ActivityComponent
  ],
  providers: [ ActivityService ]
})
export class DashboardModule { }
