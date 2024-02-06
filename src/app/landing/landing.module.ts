import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectsModule } from '../projects/projects.module';



@NgModule({
  declarations: [ 
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsModule
  ]
})
export class LandingModule { }
