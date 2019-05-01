import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './data/employee';
import {EmployeeRaw} from './data/employeeRaw';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="https://lit-refuge-67160.herokuapp.com";
  constructor(private http:HttpClient) { }
 /**getEmployee Function*/
  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
/**saveEmployee Function */
  saveEmployee(employee:EmployeeRaw): Observable<any>
  {
    return this.http.put<any>(`${this.url}/employee/`+employee._id,employee);
  }
/**getEmployee function that returns specific employee */
   getEmployee(id:number):Observable<EmployeeRaw[]>
   {
     return this.http.get<EmployeeRaw[]>(`${this.url}/employee-raw/${id}`);
     
   }

}
