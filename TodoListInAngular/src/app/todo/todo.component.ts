import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list : any [] = [];
  addData(data : string)
  {
    this.list.push({id:this.list.length, name:data})
    console.log(this.list);
  }

  removeText(id:number)
  {
    this.list = this.list.filter(item=> item.id!==id);
  }


  // num=true;
  // change(){
  //   this.num =false;
  // }

  // toggle(){
  //   this.num = true;
  // }

}
