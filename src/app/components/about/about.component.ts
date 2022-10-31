import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  user: user = null;

  constructor(public userService: UserService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.uploadUser();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged= false;
    }
  }

  uploadUser(){
    this.userService.detail(1).subscribe(data => {
      this.user = data}
      )
  }
}
