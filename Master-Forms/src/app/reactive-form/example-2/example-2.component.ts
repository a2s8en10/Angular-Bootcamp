import { JsonPipe } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.css',
})
export class Example2Component {
  RegisterForm = signal<FormGroup | null>(null);
  private formBuilder = inject(FormBuilder);
  constructor() {
    this.initForm();
    this.addNumber();
  }

  initForm() {
    const registerForm = this.formBuilder.group({
      // personal Details
      personal: this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            ),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }),
      // address details
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      }),

      //dynamic phoneNumber
      phoneNumbers: this.formBuilder.array([]),

      // term & conditions
      terms: [false, Validators.requiredTrue],
    });

    this.RegisterForm.set(registerForm);
  }

  get phoneNumbers(): FormArray {
    return this.RegisterForm()?.get('phoneNumbers') as FormArray;
  }

  addNumber() {
    this.phoneNumbers.push(
      this.formBuilder.group({
        number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        type: ['home', Validators.required],
      })
    );
  }

  // remove a phone number field
  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit() {
    if (this.RegisterForm()?.invalid) {
      this.RegisterForm()?.markAllAsTouched();
      return;
    }
    console.log(this.RegisterForm()?.value);
  }
}
