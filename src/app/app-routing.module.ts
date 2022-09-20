import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditSkillsComponent } from './components/hard-soft-skills/edit-skills.component';
import { NewSkillsComponent } from './components/hard-soft-skills/new-skills.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'new-experience', component: NewExperienceComponent},
  {path: 'edit-experience/:id', component: EditExperienceComponent},
  {path : 'new-education', component: NewEducationComponent},
  {path: 'edit-education/:id', component: EditEducationComponent},
  {path: 'new-skills', component: NewSkillsComponent},
  {path: 'edit-skills', component: EditSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
