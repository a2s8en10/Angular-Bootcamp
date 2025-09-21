import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.css',
})
export class Example2Component {
  user = {
    name: '',
    email: '',
    password: '',
    age: null,
    gender: '',
    terms: false,
  };
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Invalid Form');
      form.control.markAllAsTouched();
      return;
    }
    console.log('Form value : ', form.value);
  }
  onReset(form: NgForm) {
    form.reset();
  }
}
