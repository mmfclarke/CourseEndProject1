import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientregister } from '../classes/clientregister';

@Injectable({
  providedIn: 'root'
})
export class ClientregisterService {

  constructor(public http:HttpClient) { }

  loadAllUserInfo():Observable<Clientregister[]> {
    return this.http.get<Clientregister[]>("http://localhost:3000/alluserinfo");
  }

  // STORE DATA IN JSON FILE
  // parameters: url, object in json form
  storenewUserInfo(newuserdetails:any):any {
    return this.http.post("http://localhost:3000/alluserinfo", newuserdetails);
  }
}
