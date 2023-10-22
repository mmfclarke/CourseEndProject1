import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meeting-manager-app';
  header:string = "Welcome to your Meeting Manager!";
  homeTags:boolean = true;
  adminTag:boolean = false;
  clientTag:boolean = false;
  msgTag:boolean = true;
  collapsed:boolean = true;

  constructor(public router:Router) {}
  checkRoute() {
    let currentRoute:string = this.router.url;
    if (currentRoute !== "/") {
      this.msgTag = false;
      if (currentRoute == "/admin-login") {
        this.header = "Admin Login Portal";
      }
      else if (currentRoute == "/client-login") {
        this.header = "Client Login Portal";
      }
      else if (currentRoute == "/register") {
        this.header = "Registration";
      }
      else if (currentRoute == "/client-dashboard" || currentRoute == "/client-meetings") {
        this.header = "Client Dashboard";
        this.homeTags = false;
        this.clientTag = true;
      }
      else {
        this.header = "Admin Dashboard";
        this.homeTags = false;
        this.adminTag = true;
      }
    }
    else {}
  }
}
