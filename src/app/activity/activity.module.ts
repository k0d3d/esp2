import { NgModule } from '@angular/core';

import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityService } from './activity.service'


@NgModule({
  imports: [
    ActivityRoutingModule
  ],
  providers: [ActivityService],
  declarations: [ ActivityComponent ]
})
export class ActivityModule { }
