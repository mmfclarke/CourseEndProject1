import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit{
  
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(public router:Router,
              public formbuilder:FormBuilder,
              public http:HttpClient) {}

  ngOnInit(): void {
    this.loginRef = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  checkUser() {
    let login = this.loginRef.value;
    this.http.get<any>("http://localhost:3000/alluserinfo").subscribe(result=>{
      const user = result.find((a:any)=> {
        return a.email == login.email && a.password == login.password
      });
      if (user) {
        alert("Login Successful... Welcome!");
        this.loginRef.reset();
        this.router.navigate(["/client-dashboard"], {skipLocationChange:true});
      }
      else {
        alert("Login Failed... Please try again!");
        this.loginRef.reset();
      }
    }, err=> {
      alert("Something went wrong!");
    });
  }
}
