import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MomentModule } from 'angular2-moment'


import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityService } from './activity.service'
import { ShortIdPipe } from '../shared/short-id.pipe'

@NgModule({
  imports: [
    ActivityRoutingModule,
    CommonModule,
    MomentModule
  ],
  providers: [ActivityService],
  declarations: [ ActivityComponent, ShortIdPipe ]
})
export class ActivityModule { }
