import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityComponent } from '../activity/activity.component'
import { LocationComponent } from '../location/location.component'
import { QuestionComponent } from '../question/question.component'
import { TargeterComponent } from '../targeter/targeter.component'

const routes: Routes = [
      {
        path: '',
        component: ActivityComponent,
        data: {
          title: 'Activity'
        }
      },
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'target-manager',
        component: TargeterComponent
      }        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
