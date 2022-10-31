import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://portfoliomontagna.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post(this.authUrl + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', userLogin);
  }
}
