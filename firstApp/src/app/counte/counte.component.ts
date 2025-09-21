import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counte',
  templateUrl: './counte.component.html',
  styleUrls: ['./counte.component.css']
})
export class CounteComponent  {

  title = 'counter in';

  count = 0;

  counter(type:string){

    type==='add'? this.count++ : this.count--;

  }

  hey = false;
  getData(){
    this.hey =! this.hey;
  }


}
