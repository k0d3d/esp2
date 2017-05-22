import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
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
