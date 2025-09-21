import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data='Anurag sahu'
  today=Date();

  capString(item:string){
    return item.toLowerCase();
  }

  jsonData={
    name : 'Anurag sahu',
    age : 20
  }
}
