import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meetingrequest } from '../classes/meetingrequest';

@Injectable({
  providedIn: 'root'
})
export class MeetingrequestService {

  constructor(public http:HttpClient) { }

  loadRequestList():Observable<Meetingrequest[]> {
    return this.http.get<Meetingrequest[]>("http://localhost:7000/requests");
  }

  storeRequest(request:any):any {
    return this.http.post("http://localhost:7000/requests", request);
  }

  deleteMeetingRequest(requestid:any):any {
    return this.http.delete("http://localhost:7000/requests"+"/"+requestid)
  }
}
