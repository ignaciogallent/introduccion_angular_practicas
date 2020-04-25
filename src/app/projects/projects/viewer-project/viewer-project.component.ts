import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  project: any;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      const projectId = Number(params.id);
      this.project = environment.projects.find(c => c.id === projectId);
    });

    console.log(this.project);
  }

  ngOnInit(): void {}

}
