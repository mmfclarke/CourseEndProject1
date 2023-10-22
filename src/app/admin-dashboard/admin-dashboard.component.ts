import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  msgTag:boolean = true;
  constructor(public router:Router) {}
  checkChild() {
    let currRoute:string = this.router.url;
    if (currRoute !== "/admin-dashboard") {
      this.msgTag = false;
    }
    else {
      this.msgTag = true;
    }
  }
}
