import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { user } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
   URL = 'https://portfoliomontagna.herokuapp.com/user';
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<user[]> {
    return this.httpClient.get<user[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<user>{
    return this.httpClient.get<user>(this.URL + `detail/${id}`)
  }
 
  public save(User: user): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', User);
  }

  public update(id: number, user: user): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, user);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
