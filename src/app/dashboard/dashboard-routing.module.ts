import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from '../activity/activity.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'activity',
        component: ActivityComponent,
        data: {
          title: 'Platform activities'
        }
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
