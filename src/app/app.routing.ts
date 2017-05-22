import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Auth } from '@ionic/cloud-angular';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';


export const guardEsp = [
    {
      provide: "canActivatePage", 
      useFactory: (
        ionicAuth: Auth) => {
        // router.navigate(["/pages/login"]);
        // return true
        return () => ionicAuth.isAuthenticated();
      },
      deps: [Auth]
    },
    {
      provide: "canDeActivatePage", 
      useFactory: (
        ionicAuth: Auth) => {
        return () => !ionicAuth.isAuthenticated();
      },
      deps: [Auth]
    }    
];


export const routes = [
  {
    path: '',
    redirectTo: 'apps/activity',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: ['canActivatePage']
      },
      {
        path: 'apps',
        loadChildren: './core/core.module#CoreModule',
        canActivate: ['canActivatePage']
      }      
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
