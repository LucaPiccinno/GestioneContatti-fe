import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from './core/entities/app.contants';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: AppConstants.SECTION_ROUTE_PATHS.DASHBOARD,
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
