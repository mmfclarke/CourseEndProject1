import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adminproject } from '../classes/adminproject';

@Injectable({
  providedIn: 'root'
})
export class AdminprojectService {

  constructor(public http:HttpClient) { }

  loadAllProjects():Observable<Adminproject[]> {
    return this.http.get<Adminproject[]>("http://localhost:4000/projects");
  }

  storeNewProject(newproject:any):any {
    return this.http.post("http://localhost:4000/projects", newproject);
  }

  deleteProj(id:any):any {
    return this.http.delete("http://localhost:4000/projects"+"/"+id);
  }

  updateProj(update:any):any {
    return this.http.put("http://localhost:4000/projects"+"/"+update.id, update);
  }
}
