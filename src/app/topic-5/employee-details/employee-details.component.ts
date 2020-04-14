import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from 'src/app/topic-1/employee.service';
import { Employee } from 'src/app/models/employee-model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id;

  employee: Employee;
  @Output() notify: EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor(private _activatedRoute:ActivatedRoute, private _employeeService:EmployeeService, private _router:Router) { }

  ngOnInit(): void {
     this._activatedRoute.paramMap.subscribe(params =>{
       this._id=+params.get('id');
       this.employee=this._employeeService.getEmployee(this._id);
     })
    
  }
  handleClick(){
    this.notify.emit(this.employee);
  }
  viewNextEmployee(){
    if(this._id < 2){
      this._id=this._id+1;
    }
    else{
      this._id=1;
    }
    
    this._router.navigate(['/employee', this._id]);
  }

}
