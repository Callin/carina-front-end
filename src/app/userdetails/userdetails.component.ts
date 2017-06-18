import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  healthStatus: string;
  age: number;

  constructor() {
    this.name = 'John';
    this.email = 'john@doe.com';
    this.password = 'secret';
    this.healthStatus = 'excellent';
    this.age = 35;
  }

  ngOnInit() {
  }

}
