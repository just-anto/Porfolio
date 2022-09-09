import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { ExperienceServiceService } from 'src/app/service/experience-service.service';
import { Experience } from 'src/app/model/experience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private experienceService: ExperienceServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.uploadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  uploadExperience(): void {
    this.experienceService.list().subscribe(data => { this.experience = data; })
  }

  delete(id?: number){
    if(id = undefined){
      this.experienceService.delete(id).subscribe
      (data =>{
        this.uploadExperience();
      }, err => {
        alert("No se pudo borrar Experiencia");
      }
      )
    }
  }
}