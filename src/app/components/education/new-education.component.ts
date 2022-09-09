import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Education } from "src/app/model/education";
import { EducationService } from "src/app/service/education.service";

@Component({
    selector: 'app-new-education',
    templateUrl: './new-education.component.html',
    styleUrls: ['./new-education.component.css']
  })
  export class NewEducationComponent implements OnInit {
    nameE: string;
    descriptionE : string;
  
    constructor(private educationService: EducationService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const eeducation = new Education(this.nameE, this.descriptionE);
      this.educationService.save(eeducation).subscribe(data=> {
        alert("Educacion agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
  }