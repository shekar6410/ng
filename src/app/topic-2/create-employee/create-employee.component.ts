import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {Department} from 'src/app/models/department.model';

@Component({
   selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments:Department[]=[{
    id:1,
    name:"IT"
  },
{id:2, name:"QA"}]
// email = '';
// fullName='';
// gender='Male';
// phoneNumber='';
// isActive=true;
// department='1';
// dob='';
registerData={}
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(registerUser){
    console.log(registerUser);

  }

}
