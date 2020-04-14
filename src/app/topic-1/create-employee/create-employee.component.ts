import { Component, OnInit } from '@angular/core';
import {Department} from 'src/app/models/department.model';
import {NgForm} from '@angular/forms';
import { Employee } from 'src/app/models/employee-model'


@Component({
   selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto=false;
  departments:Department[]=[
{id:1,name:"IT"},
{id:2, name:"QA"}];

regiserData:Employee={
  
    id: null,
    name: '',
    gender: '',
    email: '',
    phoneNumber:null,
    department: '',
    isActive: false,
    dob:null, 
    photoPath:null
}

  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(userData){
    console.log(userData);
    
  }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

}
