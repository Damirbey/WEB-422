import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Position} from './data/position';
@Injectable({
  providedIn: 'root'
})
export class PositionService {
 url="https://lit-refuge-67160.herokuapp.com";
  constructor(private http:HttpClient) { }

  getPosition():Observable<Position[]>
  {
    return this.http.get<Position[]>(`${this.url}/positions`);
  }
}

