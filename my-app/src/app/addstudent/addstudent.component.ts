import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class Friends {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public email: string
  ) {
  }
}
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {


  constructor(
    httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }
}
