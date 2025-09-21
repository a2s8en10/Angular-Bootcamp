import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example-3',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './example-3.component.html',
  styleUrl: './example-3.component.css',
})
export class Example3Component {
  details = {
    name: '',
    email: '',
    password: '',
    age: null,
    gender: '',
    terms: false,
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    console.log(form.value);
  }
  onReset(form: NgForm) {
    form.reset;
  }
}
