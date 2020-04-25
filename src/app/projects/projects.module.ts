import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';


@NgModule({
  declarations: [ProjectsComponent, NewProjectComponent, ViewerProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
