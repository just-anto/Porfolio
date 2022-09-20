import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private SkillsService: SkillsService, private tokenService: TokenService) { }
isLogged = false;

  ngOnInit(): void {
    this.updateSkills();
    if (this.tokenService.getToken()){
     this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  updateSkills(): void {
    this.SkillsService.list().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.SkillsService.delete(id).subscribe(
        data => {
          this.updateSkills();
        }, err => {
          alert("No se pudo borrar skill");
        }
      )
    }
  }
}
