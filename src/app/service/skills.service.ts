import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  skillsURL = 'https://portfoliomontagna.herokuapp.com/skills/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skills []>{
    return this.httpClient.get<Skills[]>(this.skillsURL + `list`);
  }

  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skillsURL + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skillsURL + `create`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.skillsURL + `delete/${id}`);
  }

  public update(id: number, skills: Skills): Observable<any>{
    return this.httpClient.put(this.skillsURL + `update/${id}`, skills);
  }
}
