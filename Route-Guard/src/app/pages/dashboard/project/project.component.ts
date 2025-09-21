import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects = [
    { id: 1, name: 'Project Relax' },
    { id: 2, name: 'Project Pride' },
    { id: 3, name: 'Project Anu' },
  ];
}
