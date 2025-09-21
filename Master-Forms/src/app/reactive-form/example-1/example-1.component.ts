import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.css',
})
export class Example1Component {
  registerForm!: FormGroup;

  constructor() {
    // this.formViaFormGroup();
    this.formViaFromBuilder();
  }

  private formBuilder = inject(FormBuilder);

  formViaFormGroup() {
    console.log('FormGroup : ');
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(65),
      ]),
      gender: new FormControl('', [Validators.required]),
      terms: new FormControl('', [
        Validators.required,
        Validators.requiredTrue,
      ]),
    });
  }

  formViaFromBuilder() {
    console.log('FormBuilder : ');

    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(65),
      ]),
      gender: new FormControl('', [Validators.required]),
      terms: new FormControl('', [
        Validators.required,
        Validators.requiredTrue,
      ]),
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }
  onReset() {
    this.registerForm.reset();
  }
}
