import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingscheduleService } from '../services/meetingschedule.service';
import { Meetingschedule } from '../classes/meetingschedule';
import { MeetingrequestService } from '../services/meetingrequest.service';
import { Meetingrequest } from '../classes/meetingrequest';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-meetings',
  templateUrl: './admin-meetings.component.html',
  styleUrls: ['./admin-meetings.component.css']
})
export class AdminMeetingsComponent implements OnInit {
  newRef = new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    email:new FormControl(),
    participants:new FormControl(),
    date:new FormControl(),
    topic:new FormControl()
  });

  meetingschedule:Array<Meetingschedule> = [];
  meetingrequests:Array<Meetingrequest> = [];
  displayTag:boolean = true;
  formTag:boolean = false;
  buttonVariable:string = "Submit";

  constructor(public meetingService:MeetingscheduleService,
              public requestService:MeetingrequestService,
              public router:Router,
              public http:HttpClient) {}

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

  displayForm():void {
    this.formTag = true;
    this.displayTag = false;
    this.buttonVariable = "Submit";
  }

  hideForm():void {
    this.formTag = false;
    this.displayTag = true;
    this.buttonVariable = "Submit";
  }

  newMeeting():void {
    let newmeeting = this.newRef.value;

    if (this.buttonVariable == "Submit" || this.buttonVariable == "Approve") {
      this.meetingService.storeNewMeeting(newmeeting).subscribe({
        next:(result:any)=> {
          this.meetingschedule = result;
        },
        error:(error:any)=> {
          console.log(error);
        },
        complete:()=> {
          alert("Meeting Added!");
          console.log("done!");
          this.ngOnInit();
          this.formTag = false;
          this.displayTag = true;
        }
      });
      this.newRef.reset();
    }
    else {
      this.meetingService.updateMeeting(newmeeting).subscribe({
        next:(result:any)=> {
          this.meetingschedule = result;
        },
        error:(error:any)=> {
          console.log(error);
        },
        complete:()=> {
          alert("Meeting Updated!");
          console.log("done!");
          this.ngOnInit();
          this.formTag = false;
          this.displayTag = true;
        }
      });
      this.newRef.reset();
    }
  }

  deleteMeeting(id:any):void {
    this.meetingService.deleteSchedMeeting(id).subscribe({
      next:(result:any)=> {
        this.meetingschedule = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        alert("Meeting Deleted!");
        console.log("done!");
        this.ngOnInit();
      }
    });
  }

  updateMeeting(meeting:any):void {
    this.newRef.get("id")?.setValue(meeting.id);
    this.newRef.get("name")?.setValue(meeting.name);
    this.newRef.get("email")?.setValue(meeting.email);
    this.newRef.get("participants")?.setValue(meeting.participants);
    this.newRef.get("date")?.setValue(meeting.date);
    this.newRef.get("topic")?.setValue(meeting.topic);
    this.formTag = true;
    this.displayTag = false;
    this.buttonVariable="Update";
  }

  deleteRequest(requestid:any):void {
    this.requestService.deleteMeetingRequest(requestid).subscribe({
      next:(result:any)=> {
        this.meetingrequests = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        alert("Request Deleted!");
        console.log("done!");
        this.ngOnInit();
      }
    });
  }

  approveRequest(approve:any):void {
    this.newRef.get("name")?.setValue(approve.name);
    this.newRef.get("email")?.setValue(approve.email);
    this.newRef.get("participants")?.setValue(approve.participants);
    this.newRef.get("date")?.setValue(approve.date);
    this.newRef.get("topic")?.setValue(approve.topic);
    this.formTag = true;
    this.displayTag = false;
    this.buttonVariable="Approve";
  }
}
