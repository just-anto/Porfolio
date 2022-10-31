import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  expURL = 'https://portfoliomontagna.herokuapp.com/education/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.expURL + 'list');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.expURL + `detail/${id}`)
  }
 
  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
