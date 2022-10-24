import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL: string;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skills []>{
    return this.httpClient.get<Skills[]>(this.URL + `list`);
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }

  public update(id: number, skills: Skills): Observable<any>{
    return this.httpClient.put(this.URL + `update/${id}`, skills);
  }
}