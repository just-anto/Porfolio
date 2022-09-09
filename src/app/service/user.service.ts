import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { user } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   URL = 'http://localhost:8080/user';
  constructor(private http: HttpClient) { }

  public getUser(): Observable<user> {
      return this.http.get<user>(this.URL+ 'show/profile');
  }
}
