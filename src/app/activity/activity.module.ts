import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MomentModule } from 'angular2-moment'


import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityService } from './activity.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    ActivityRoutingModule,
    CommonModule,
    MomentModule,
    SharedModule
  ],
  providers: [ActivityService],
  declarations: [ ActivityComponent ]
})
export class ActivityModule { }
