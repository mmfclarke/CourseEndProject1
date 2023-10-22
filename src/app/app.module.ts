import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app components/app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMeetingsComponent } from './admin-meetings/admin-meetings.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';

import { AdminprojectService } from './services/adminproject.service';
import { ClientregisterService } from './services/clientregister.service';
import { MeetingscheduleService } from './services/meetingschedule.service';
import { MeetingrequestService } from './services/meetingrequest.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminMeetingsComponent,
    AdminProjectsComponent,
    ClientLoginComponent,
    ClientRegisterComponent,
    ClientDashboardComponent,
    ClientMeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminprojectService, 
              ClientregisterService, 
              MeetingscheduleService, 
              MeetingrequestService,
              HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
