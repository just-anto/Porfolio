import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { LogoArgComponent } from './components/logo-arg/logo-arg.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import {NewEducationComponent} from './components/education/new-education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EditSkillsComponent } from './components/hard-soft-skills/edit-skills.component';
import { NewSkillsComponent } from './components/hard-soft-skills/new-skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    HardSoftSkillsComponent,
    LogoArgComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    EditEducationComponent,
    NewEducationComponent,
    EditSkillsComponent,
    NewSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [
    AppComponent],
  
})
export class AppModule { }
