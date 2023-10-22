import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingscheduleService } from '../services/meetingschedule.service';
import { Meetingschedule } from '../classes/meetingschedule';
import { MeetingrequestService } from '../services/meetingrequest.service';
import { Meetingrequest } from '../classes/meetingrequest';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  meetingschedule:Array<Meetingschedule> = [];
  meetingrequests:Array<Meetingrequest> = [];

  constructor(public meetingService:MeetingscheduleService,
    public requestService:MeetingrequestService,
    public router:Router) {}

  ngOnInit(): void {
    this.meetingService.loadSchedule().subscribe({
      next:(result:any)=> {
        this.meetingschedule = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        console.log("done!");
      }
    });
    this.requestService.loadRequestList().subscribe({
      next:(result:any)=> {
        this.meetingrequests = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        console.log("done!");
      }
    });
  }
}
