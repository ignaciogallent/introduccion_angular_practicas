import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public projects: Project[];
  public project: Project = {id: undefined, name: ''};
  public numProjects: number;

  constructor() { }

  ngOnInit(): void {
    this.projects = environment.projects;
  }


  public saveProject() {
    this.project.id = Date.now();
    this.projects.push({ ...this.project });
    this.numProjects = this.projects.length;
  }

}
