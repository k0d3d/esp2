import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent } from './location.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    data: {
      title: 'Authorized locations'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {}
