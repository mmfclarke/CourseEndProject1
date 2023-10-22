import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminprojectService } from '../services/adminproject.service';
import { Adminproject } from '../classes/adminproject';
import { delay } from 'rxjs';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit{
  projRef = new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    due:new FormControl(),
    description:new FormControl()
  });

  projects:Array<Adminproject>=[];
  displayTag:boolean = true;
  formTag:boolean = false;
  buttonVariable = "Submit";
  constructor(public projectService:AdminprojectService,
              public router:Router) {}
  
  ngOnInit():void {
    this.projectService.loadAllProjects().subscribe({
      next:(result:any)=> {
        this.projects = result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        console.log("done!");
      }
    });
  }

  displayForm():void {
    this.displayTag = false;
    this.formTag = true;
  }

  hideForm():void {
    this.displayTag = true;
    this.formTag = false;
  }

  newProj():void {
    let newproject = this.projRef.value;

    if (this.buttonVariable == "Submit") {
      this.projectService.storeNewProject(newproject).subscribe({
        next:(result:any)=> {
          this.projects = result;
        },
        error:(error:any)=> {
          console.log(error);
        },
        complete:()=> {
          alert("Project Added!");
          console.log("done!");
          this.ngOnInit();
          this.formTag = false;
          this.displayTag = true;
        }
        });
        this.projRef.reset();
    }
    else {
      this.projectService.updateProj(newproject).subscribe({
        next:(result:any)=> {
          this.projects = result;
        },
        error:(error:any)=> {
          console.log(error);
        },
        complete:()=> {
          alert("Project Updated!");
          console.log("done!");
          this.ngOnInit();
          this.formTag = false;
          this.displayTag = true;
        }
        });
        this.projRef.reset();
    }
    
 }

 deleteProject(id:any):void {
  this.projectService.deleteProj(id).subscribe({
    next:(result:any)=> {
      this.projects = result;
    },
    error:(error:any)=> {
      console.log(error);
    },
    complete:()=> {
      alert("Project Deleted!");
      console.log("done!");
      this.ngOnInit();
    }
    });
 }

 updateProject(project:any):void {
  this.projRef.get("id")?.setValue(project.id);
  this.projRef.get("pname")?.setValue(project.pname);
  this.projRef.get("due")?.setValue(project.due);
  this.projRef.get("description")?.setValue(project.description);
  this.formTag = true;
  this.displayTag = false;
  this.buttonVariable = "Update";
 }

}
