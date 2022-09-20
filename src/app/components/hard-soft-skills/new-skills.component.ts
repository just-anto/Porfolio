import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';

import { SkillsService } from 'src/app/service/skills.service';


@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {

  name: string;
  porcentage: number;

  constructor(private skills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  OnCreate(): void {
    const skills = new Skills(this.name, this.porcentage);
    this.skills.save(skills).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

}
