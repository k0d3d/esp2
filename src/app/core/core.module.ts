import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { CoreRoutingModule } from './core-routing.module'

import { ActivityComponent } from '../activity/activity.component'
import { ActivityService } from '../activity/activity.service'

import { LocationComponent } from '../location/location.component'
import { LocationService } from '../location/location.service'

import { QuestionComponent } from '../question/question.component'
import { QuestionService } from '../question/question.service'

import { TargeterComponent } from '../targeter/targeter.component'



@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [
    ActivityComponent, 
    LocationComponent, 
    QuestionComponent,
    TargeterComponent],
  providers: [ 
    ActivityService, 
    LocationService,
    QuestionService
  ]
})
export class CoreModule { }
