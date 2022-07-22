import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees:any =[]
  errMessage:string =''
  constructor(employeeService:EmployeeService){
    //this.employees = employeeService.getEmployeeInfo()
    employeeService.getEmployeeInfo().subscribe(res=>this.employees=res,error=>this.errMessage=error)
  }
}
