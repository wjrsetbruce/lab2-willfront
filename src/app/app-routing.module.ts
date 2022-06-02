import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MyDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'tabla',
    component: MyTableComponent
  },
  {
    path: '**',
    component: MyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
