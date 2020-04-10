import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from 'src/app/topic-1/employee.service';
import { Employee } from 'src/app/models/employee-model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  @Output() notify: EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor(private _activatedRoute:ActivatedRoute, private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    const id=+this._activatedRoute.snapshot.paramMap.get('id');
    this.employee=this._employeeService.getEmployee(id);
  }
  handleClick(){
    this.notify.emit(this.employee);
  }

}
