import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from './../student-services.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {
  students : any 
    
  constructor() {
    this.students = [
      {id: 101, name: "Alex" , description: "Alex Details", email: "alex@xyz.com"},
      {id: 102, name: "Ana" , description: "Ana Details", email: "Ana@xyz.com"},
      {id: 103, name: "Sara" , description: "Sara Details", email: "Sara@xyz.com"},
      {id: 104, name: "Majd" , description: "Majd Details", email: "Majd@xyz.com"},
      {id: 105, name: "Kareem" , description: "Kareem Details", email: "Kareem@xyz.com"}
    ]
    };
  ngOnInit(): void {
  }

}
