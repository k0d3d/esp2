import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { StatscardComponent } from '../shared/statscard/statscard.component'


import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [ 
    DashboardComponent,
    // StatscardComponent
  ],
  providers: [  ]
})
export class DashboardModule { }
