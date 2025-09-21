import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example-3',
  standalone: true,
  imports: [],
  templateUrl: './example-3.component.html',
  styleUrl: './example-3.component.css'
})
export class Example3Component {
  register = signal<FormGroup | null>(null);

  private formBuilder = inject(FormBuilder);
  constructor(){

  }

  initForm(){
    
  }

}
