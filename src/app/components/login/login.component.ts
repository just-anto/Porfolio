import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login'; 
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoggingFail = false;
  userLogin: UserLogin;
  userName: string;
  password: string;
  role: string[] = [];
  errMsj: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggingFail = false;
      this.role = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.userName, this.password); 
    this.authService.login(this.userLogin).subscribe(data =>{
      this.isLogged = true;
      this.isLoggingFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.role = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLoggingFail = true;
      this.errMsj = err.error.message;
      console.log(this.errMsj);
    })
  }

}
