import {Injectable} from '@angular/core';
import {Employee} from 'src/app/models/employee-model';
@Injectable()
export class EmployeeService{
    private listEmployees:Employee[]=
    [{
        id:1,
        name:'Shekar',
        gender:'Male',
        contactPreference:'Email',
        phoneNumber:9999999999,
        email:'shekar.6410@gmail.com',
        department:'IT',
        isActive:true,
        photoPath:'assets/images/male.png'
      },
    {
         id:2,
        name:'Maheshwari',
        gender:'Female',
        contactPreference:'Email',
        phoneNumber:9999999999,
        email:'maheshwari@gmail.com',
        department:'IT',
        isActive:true,
        photoPath:'assets/images/female.png'
    
    }]
    getEmployees():Employee[]{
        return this.listEmployees;
    }

    getEmployee(id):Employee{
        return this.listEmployees.find(e => e.id === id);
    }

}