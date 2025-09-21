import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css',
})
export class EditProjectComponent {
  projectData = '';
  isSave = false;
  save(): void {
    this.isSave = true;
    alert('Project Saved');
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.isSave) {
      return confirm('you have unsave changes. do you really want to leave?');
    }
    return true;
  }
}
