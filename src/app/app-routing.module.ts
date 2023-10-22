import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMeetingsComponent } from './admin-meetings/admin-meetings.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';

const routes: Routes = [
  {path:"admin-login", component:AdminLoginComponent},
  {path:"client-login", component:ClientLoginComponent},
  {path:"register", component:ClientRegisterComponent},
  {path:"client-dashboard", component:ClientDashboardComponent},
  {path:"client-meetings", component:ClientMeetingsComponent},
  {path:"admin-dashboard", component:AdminDashboardComponent, children:[
    {path:"admin-projects", component:AdminProjectsComponent},
    {path:"admin-meetings", component:AdminMeetingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
