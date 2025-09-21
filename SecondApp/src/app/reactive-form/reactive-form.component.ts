import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  update(){
    console.warn(this.loginForm.value);
  }

}
