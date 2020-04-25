import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() { }

  ngOnInit(): void {

    this.projects = environment.projects;



    console.log(this.projects);

  }

}

export interface Project {
  id: number;
  name: string;
}
