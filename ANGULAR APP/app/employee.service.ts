import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './data/employee';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="https://lit-refuge-67160.herokuapp.com";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
}
