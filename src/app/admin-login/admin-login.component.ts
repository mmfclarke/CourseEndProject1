import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(public router:Router) {}
  checkAdmin() {
    let login = this.adminRef.value;
    // Check Admin Credentials
    if (login.email=="admin@gmail.com" &&
    login.password=="admin123") {
      alert("Login Successful... Welcome, Admin!");
      this.router.navigate(["admin-dashboard"],{skipLocationChange:true}); // route to admin-dashboard
    }
    else {
      alert("Login Failed... Please Try Again.");
    }
    this.adminRef.reset();
  }
}
