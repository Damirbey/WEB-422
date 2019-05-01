import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../data/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   
  employees:Employee[];
  getEmployeesSub:any;
  loadingError:boolean;
  constructor(private t:EmployeeService) {
    this.loadingError=false;
    this.getEmployeesSub="";
   }
  

  ngOnInit() {
    this.getEmployeesSub=this.t.getEmployees().subscribe((employees)=>{this.employees=employees;},()=>{this.loadingError=true;});
  }

  ngOnDestroy()
  {
    this.getEmployeesSub.unsubscribe();
  }
}
