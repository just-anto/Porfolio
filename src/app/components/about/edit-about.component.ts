import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { ImgService } from 'src/app/service/img.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
user: user = null;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private userService: UserService,
    private router: Router,
    public imgService: ImgService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.detail(id).subscribe(
      data => { 
        this.user = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.user.img = this.imgService.url
    this.userService.update(id, this.user).subscribe(
      data => { 
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar usuario");
        this.router.navigate(['']);
      }
    )
  }

  uploadImg($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "profile_" + id;
    this.imgService.uploadImg($event, name)
  }

}
