import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingrequestService } from '../services/meetingrequest.service';
import { Meetingrequest } from '../classes/meetingrequest';

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent {
  newReq = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    participants:new FormControl(),
    date:new FormControl(),
    topic:new FormControl()
  });

  meetingrequests:Array<Meetingrequest> = [];

  constructor(
    public requestService:MeetingrequestService,
    public router:Router) {}

  newRequest():void {
    let request = this.newReq.value;
    this.requestService.storeRequest(request).subscribe({
      next:(result:any)=> {
        this.meetingrequests = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        alert("Request Submitted!");
        console.log("done!");
      }
    });
    this.newReq.reset();
  }

  hideForm() {
    this.router.navigate(["/client-dashboard"]);
  }
}
