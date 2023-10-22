import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meetingschedule } from '../classes/meetingschedule';

@Injectable({
  providedIn: 'root'
})
export class MeetingscheduleService {

  constructor(public http:HttpClient) { }

  loadSchedule():Observable<Meetingschedule[]> {
    return this.http.get<Meetingschedule[]>("http://localhost:5000/meetingschedule");
  }

  storeNewMeeting(newmeeting:any):any {
    return this.http.post("http://localhost:5000/meetingschedule", newmeeting);
  }

  deleteSchedMeeting(id:any):any {
    return this.http.delete("http://localhost:5000/meetingschedule"+"/"+id);
  }

  updateMeeting(update:any):any {
    return this.http.put("http://localhost:5000/meetingschedule"+"/"+update.id, update);
  }
}
