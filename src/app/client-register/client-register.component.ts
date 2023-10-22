import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ClientregisterService } from '../services/clientregister.service';
import { Clientregister } from '../classes/clientregister';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit{
  registerRef = new FormGroup ({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  });

  alluserinfo:Array<Clientregister> = [];

  constructor(public clientregisterService:ClientregisterService,
              public router:Router,
              public formBuilder:FormBuilder,
              public http:HttpClient) {}

  ngOnInit(): void {
    this.registerRef = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  storenewUser() {
    this.http.post<any>("http://localhost:3000/alluserinfo", this.registerRef.value).subscribe(res=>{
      alert("You have been registered... Please log in!");
      this.registerRef.reset();
      this.router.navigate(["/client-login"]);
    }, err=>{
      alert("Something went wrong")
    })
  }
}
