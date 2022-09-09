import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceServiceService } from 'src/app/service/experience-service.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nameE: string ='';
  descriptionE : string ='';

  constructor(private ExperienceService: ExperienceServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  OnCreate(): void{
    const experience = new Experience(this.nameE, this.descriptionE);
    this.ExperienceService.save(experience).subscribe(data=> {
      alert("Experiencia agregada");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
