import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.css'
})
export class Example1Component {
  user = { name: '', email: '' };

 onSubmit(form : NgForm) {
    if(form.invalid) {
      console.log("Invalid Form");
    }
    console.log("User data : ",this.user);
    console.log("NgForm Data : ",form);
  }
}
