import {Injectable} from '@angular/core';
import {Employee} from 'src/app/models/employee-model';
@Injectable()
export class EmployeeService{
    private listEmployees:Employee[]=
    [{
        id:1,
        name:'Prabhas',
        gender:'Male',
        phoneNumber:9999999999,
        email:'prabhas@gmail.com',
        department:'IT',
        isActive:true,
        photoPath:'assets/images/prabhas.webp',
        dob:new Date(3/15/1991)
      },
    {
         id:2,
        name:'Pooja',
        gender:'Female',
        phoneNumber:9999999999,
        email:'pooja@gmail.com',
        department:'QA',
        isActive:true,
        dob:new Date(3/15/1991),
        photoPath:'assets/images/pooja.jfif'
    
    }]
    getEmployees():Employee[]{
        return this.listEmployees;
    }

    getEmployee(id):Employee{
        return this.listEmployees.find(e => e.id === id);
    }

}