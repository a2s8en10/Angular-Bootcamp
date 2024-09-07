import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getname()
  {
    alert("successfully Sign Up");
  }

  // form function
  userData : any = {};
  getForm(data:NgForm){
    console.log(data);
    this.userData = data;
  }

  num = false
  change(){
    this.num = true;
  }

  // toggle function (hide and show)

  show = false;
  toggle(){
    this.show = !this.show;
  }

}
